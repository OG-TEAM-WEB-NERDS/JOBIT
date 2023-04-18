import React from 'react';
import { FeaturedCompanyCard } from '.';
import { FeaturedCompanies } from '../samples/static-data';

const FeaturedJobPosts = () => (
  <div>
    <h5>Featured Companies</h5>
    <div className="flex flex-col md:flex-row justify-between my-4 ">
      {FeaturedCompanies.map((company, index) => (
        <FeaturedCompanyCard
          key={index}
          logo={company.logo}
          rating={company.rating}
          employerName={company.employerName}
          location={company.location}
          vacancies={company.vacancies}
          reviewCount={company.reviewCount}
        />
      ))}
    </div>
  </div>
);

export default FeaturedJobPosts;
