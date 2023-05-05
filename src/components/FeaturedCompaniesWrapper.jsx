import React from 'react';

// eslint-disable-next-line import/no-cycle
import { FeaturedCompanyCard } from '.';

const FeaturedCompaniesWrapper = ({ companies }) => (
  <div className="flex flex-col md:flex-row gap-4">
    {companies.map((company, index) => (
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
);

export default FeaturedCompaniesWrapper;
