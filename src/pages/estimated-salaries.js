
import { useState, useEffect } from 'react';

import { BarChart, Button, Heading } from '../components';
import { useLazyGetEstimatedSalaryQuery } from '../services/JSearch';
import { useLazyGetLocationInfoQuery } from '../services/GeocodingAPI';

const EstimatedSalaries = () => {
  // Location data API call
  const [getLocationInfo] = useLazyGetLocationInfoQuery();

  // Estimated salary API call
  const [getEstimatedSalary, { isFetching }] = useLazyGetEstimatedSalaryQuery();

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
    // eslint-disable-next-line no-console
    // eslint-disable-next-line no-console
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

  return (
    <main className="py-6 flex flex-col lg:flex-row lg:items-stretch gap-10">

      <div className="flex flex-col gap-10 w-full lg:w-1/2">
        <Heading heading="Estimated Salaries" />

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          <div className="flex flex-col w-full gap-3">
            <label className="text-natural-2 font-semibold flex flex-col gap-2" htmlFor="jobTitle">
              <span>Job Title</span>
              <input required className="inputBordered" type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Enter job title" />
            </label>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col w-full gap-3">
              <label className="text-natural-2 font-semibold flex flex-col gap-2" htmlFor="location">
                <span>Location</span>
                <input required className="inputBordered" type="text" id="location" name="location" value={formData.location} onChange={handleChange} placeholder="Enter location" />
              </label>
            </div>
            <div className="flex flex-col w-full gap-3">
              <label className="text-natural-2 font-semibold flex flex-col gap-2" htmlFor="radius">
                <span>Radius (km)</span>
                <input required className="inputBordered" type="number" id="radius" name="radius" min={1} value={formData.radius} onChange={handleChange} placeholder="Enter radius" />
              </label>
            </div>
          </div>

          <div className="mt-4">
            <Button primary isSubmit fullWidth>Get results</Button>
          </div>
        </form>
      </div>

      {/* CHART/INFORMATION */}

      <BarChart data={estimatedSalaryData} isFetching={isFetching} />

    </main>
  );
};

export default EstimatedSalaries;
