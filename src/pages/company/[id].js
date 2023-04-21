import React from 'react';
import Image from 'next/image';

import jobs from '../../samples/search';
import { Button, SimilarCompaniesCard, Banner, TabbedInterface } from '../../components';
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
        <div className="xl:px-4 flex flex-col space-y-10">

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

          <TabbedInterface />

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
