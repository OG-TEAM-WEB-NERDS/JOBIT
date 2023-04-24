import React from 'react';
import { FeaturedCompanyCard } from '.';
import { FeaturedCompanyData } from '../samples/static-data';
import SectionTitle from './SectionTitle';

const FeaturedCompanies = () => (
  <div className="flex flex-col gap-4">
    <SectionTitle
      title="Featured Companies"
    />
    <div className="flex flex-col md:flex-row gap-4">
      {FeaturedCompanyData.map((company, index) => (
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

export default FeaturedCompanies;
