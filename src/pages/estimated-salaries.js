import { useState, useEffect } from 'react';
import Image from 'next/image';

import { BarChart, Button, Heading } from '../components';
import { useLazyGetEstimatedSalaryQuery } from '../services/JSearch';
import { useLazyGetLocationInfoQuery } from '../services/GeocodingAPI';
import { BriefcaseIcon, CrossIcon } from '../assets';

const EstimatedSalaries = () => {
  // Location data API call
  const [getLocationInfo] = useLazyGetLocationInfoQuery();

  // Estimated salary API call
  const [getEstimatedSalary] = useLazyGetEstimatedSalaryQuery();

  // Form data state
  const [formData, setFormData] = useState({
    jobTitle: '',
    location: '',
    radius: 100,
  });

  // Estimated salary data to pass into graph
  const [estimatedSalaryData, setEstimatedSalaryData] = useState();

  // Convert coordinates into string values for city/village and country using third party API
  const getLocation = async (coordinates) => {
    const location = await getLocationInfo(coordinates);

    if (location.data) {
      setFormData((prevData) => ({ ...prevData, location: `${location?.data?.address?.city || location?.data?.address?.village}, ${location?.data?.address?.country}` }));
    }
  };

  // Successful location API call
  const successCallback = ({ coords }) => {
    const coordinates = {
      latitude: coords.latitude,
      longitude: coords.longitude,
    };

    getLocation(coordinates);
  };

  // Unsuccessful location API call
  const errorCallback = (error) => {
    console.error(error);
  };

  // Ask permissions/utilise Geolocation API on load
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form field submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getEstimatedSalary(formData);

    if (data) {
      setEstimatedSalaryData({ ...formData, ...data });
    }
  };

  console.log(estimatedSalaryData);

  return (
    <main className="py-6 flex flex-col lg:flex-row lg:items-center gap-10">

      <div className="flex flex-col gap-10 w-full lg:w-1/2">
        <Heading heading="Estimated Salaries" />

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          <div className="flex flex-col w-full gap-3">
            <label className="text-natural-2 font-semibold" htmlFor="jobTitle">Job Title</label>
            <input required className="inputBordered" type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Enter job title" />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col w-full gap-3">
              <label className="text-natural-2 font-semibold" htmlFor="location">Location</label>
              <input required className="inputBordered" type="text" id="location" name="location" value={formData.location} onChange={handleChange} placeholder="Enter location" />
            </div>
            <div className="flex flex-col w-full gap-3">
              <label className="text-natural-2 font-semibold" htmlFor="radius">Radius (km)</label>
              <input required className="inputBordered" type="number" id="radius" name="radius" min={1} value={formData.radius} onChange={handleChange} placeholder="Enter radius" />
            </div>
          </div>

          <div className="mt-4">
            <Button primary isSubmit fullWidth>Get results</Button>
          </div>
        </form>
      </div>

      {/* CHART/INFORMATION */}

      {/* Show chart if data exists */}
      {
        estimatedSalaryData?.data.length > 0 ? (
          <div className="flex flex-col gap-5 w-full lg:w-1/2 bg-white dark:bg-black-2 p-6 rounded-xl">
            <h2>
              Estimated Salary
              <span className="font-normal"> for a </span>
              {estimatedSalaryData?.jobTitle}
              <span className="font-normal"> located in </span>
              {estimatedSalaryData?.location}
              <span className="font-normal"> within in a </span>
              {estimatedSalaryData?.radius}km<span className="font-normal"> radius.</span>
            </h2>
            <BarChart data={estimatedSalaryData?.data} />
          </div>
        ) : (
          <div className="flex flex-col gap-8 w-full self-end lg:w-1/2 dark:bg-black-2 p-6 rounded-xl">

            {/* Else if data array equals 0, show error message about updating/broading search */}
            {
              estimatedSalaryData?.data.length <= 0 ? (
                <>
                  <div className="flex items-center justify-center bg-natural-1 p-4 w-20 h-20 rounded-xl">
                    <Image
                      src={CrossIcon}
                      alt="Cross icon"
                      width={40}
                      height={40}
                      className="grayscale brightness-0 invert"
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <h2>Oops, there appears to be no data for your request</h2>
                    <p>Please try increasing your radius search area or broadening your location or job title you want to search for and try again.</p>
                  </div>
                </>
              ) : (
                <>
                  {/* Else, show initial information about using the tool */}
                  <div className="flex items-center justify-center bg-primary p-4 w-20 h-20 rounded-xl">
                    <Image
                      src={BriefcaseIcon}
                      alt="Briefcase icon"
                      width={40}
                      height={40}
                      className="grayscale brightness-0 invert"
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <h2>Find out estimated salary results in your area</h2>
                    <p>Enter in a job title, your location and a radius you'd like to search within to get the lowest, highest and median salaries based on your added information.</p>
                  </div>
                </>
              )
            }

          </div>
        )
      }

    </main>
  );
};

export default EstimatedSalaries;
