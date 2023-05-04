import React from 'react';

import { FeaturedCompanyCard, Loader } from '.';

import SectionTitle from './SectionTitle';

import { useGetFeaturedCompaniesQuery } from '../services/JSearch';
import FeaturedCompaniesWrapper from './FeaturedCompaniesWrapper';

const FeaturedCompanies = () => {
  const { data, isFetching, isError } = useGetFeaturedCompaniesQuery();

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
      <FeaturedCompaniesWrapper companies={FeaturedCompaniesData} />
    </div>
  );
};

export default FeaturedCompanies;
