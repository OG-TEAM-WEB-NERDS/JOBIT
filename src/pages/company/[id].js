import React from 'react';
import Image from 'next/image';

import jobs from '../../samples/search';
import { Button, SimilarCompaniesCard, Banner } from '../../components';
import { BellIcon, PlusIcon, SearchIcon } from '../../components/icons';
import { SimilarCompaniesData } from '../../samples/static-data';
import { profilePlaceholder1, profilePlaceholder2, profilePlaceholder3 } from '../../assets';

const CompanyPage = () => {
  const job = jobs.data[0];

  return (
    <div className="py-6 grid xl:grid-cols-3 gap-8">

      {/* Company Details */}
      <div className="w-full flex flex-col xl:col-span-2">

        <Banner logo={job.employer_logo} />

        {/* Company Name */}
        <div className="xl:px-4 flex flex-col space-y-10 mt-10">

          <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            <div className="flex flex-col space-y-3">
              <h1>UIHUT</h1>
              <h6>UIHUT Technologies LLC • Sylhet, BD</h6>
              <p className="text-natural-1 dark:text-natural-2">Design Resources platform • 203,765 Followers</p>
            </div>
            <div className="w-full md:w-44 flex flex-col md:items-end space-y-6">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 rounded-full border-2 border-natural-3 dark:border-black-1">
                  <Image
                    src={profilePlaceholder1}
                    alt="Profile"
                    width={46}
                    height={46}
                  />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-natural-3 dark:border-black-1">
                  <Image
                    src={profilePlaceholder2}
                    alt="Profile"
                    width={46}
                    height={46}
                  />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-natural-3 dark:border-black-1">
                  <Image
                    src={profilePlaceholder3}
                    alt="Profile"
                    width={46}
                    height={46}
                  />
                </div>
                <div className="bg-natural-3 w-12 h-12 rounded-full border-2 border-natural-3 dark:border-black-1 text-sm text-black-3 font-bold flex items-center justify-center">+34</div>
              </div>
              <Button primary outlined fullWidth><PlusIcon />Follow</Button>
            </div>
          </div>

          <div className="flex gap-2">
            <Button secondary outlined>About</Button>
            <Button secondary outlined isActive>Jobs</Button>
            <Button secondary outlined>Products</Button>
            <Button secondary outlined>Employees</Button>
            <Button secondary outlined>Locations</Button>
            <Button secondary outlined>Reviews</Button>
          </div>

          <div className="bg-white dark:bg-black-2 w-full rounded-lg p-4 flex flex-col space-y-6">
            <div className="flex flex-col md:items-center md:flex-row justify-between gap-8">

              <form className="flex flex-col md:flex-row items-center bg-natural-4 dark:dark:bg-black-3 rounded-xl py-3 px-4 h-full justify-between gap-4">
                <div className="flex ml-2 gap-2 mr-2 pt-2 md:pt-0">
                  <SearchIcon />
                  <input
                    type="text"
                    placeholder="Search for a job ..."
                    className="bg-natural-4 text-black-1 outline-none"
                  />
                </div>
                <div className="justify-end pt-4 md:pt-0">
                  <Button primary isSubmit>Search</Button>
                </div>
              </form>
              <div className="w-full md:w-44">
                <Button secondary outlined fullWidth><BellIcon />Create job alert</Button>
              </div>
            </div>
            <div>
              <h6>Recently Posted Jobs</h6>
              <div className="grid grid-cols-2 gap-4">
                Job Cards
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Similar Companies */}
      <div className="w-full flex flex-col xl:col-span-1 space-y-6">
        <h4>Similar Companies</h4>
        <div className="flex flex-col space-y-6">
          {
            SimilarCompaniesData.map((company, i) => (
              <SimilarCompaniesCard
                key={i}
                logo={company.logo}
                rating={company.rating}
                employerName={company.employerName}
                location={company.location}
                reviewCount={company.reviewCount}
              />
            ))
          }
        </div>
      </div>

    </div>
  );
};

export default CompanyPage;
