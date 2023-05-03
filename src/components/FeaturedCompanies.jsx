import React from 'react';

import { FeaturedCompanyCard, Loader } from '.';
// import { FeaturedCompanyData } from '../samples/static-data';
import SectionTitle from './SectionTitle';

import { useGetFeaturedCompaniesQuery } from '../services/JSearch';

const FeaturedCompanies = () => {
  const { data, isFetching, isError } = useGetFeaturedCompaniesQuery();
  console.log(data);

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div
        className="
        font-semibold
        text-black-3
        dark:text-gray-200
        mx-2"
      >
        Error while fetching!!!
      </div>
    );
  }

  const FeaturedCompaniesData = data.data.employers.slice(0, 3); // choose the first three employers

  return (
    <div className="flex flex-col gap-4">
      <SectionTitle title="Featured Companies" />
      <div className="flex flex-col md:flex-row gap-4">
        {FeaturedCompaniesData.map((company, index) => (
          <FeaturedCompanyCard
            key={index}
            id={company.value}
            logo={company.logo}
            rating={4.5}
            employerName={company.name}
            location={company.location || 'New York, USA'}
            vacancies={company.est_count}
            reviewCount={19000}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCompanies;
