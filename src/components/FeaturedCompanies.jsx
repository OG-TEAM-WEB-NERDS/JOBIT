import React from 'react';
import { FeaturedCompanyCard } from '.';
import { appleLogo, mailchimpLogo, gitlabLogo } from '../assets';

const FeaturedJobPosts = () => (
  <div>
    <h5>Featured Companies</h5>
    <div className="flex justify-between">
      <FeaturedCompanyCard
        logo={appleLogo}
        rating={4.5}
        employerName="Apple Inc."
        location="New York, USA"
        vacancies={5}
        reviewCount={19000}
      />
      <FeaturedCompanyCard
        logo={mailchimpLogo}
        rating={3.2}
        employerName="Mailchimp"
        location="New York, USA"
        vacancies={1}
        reviewCount={21500}
      />
      <FeaturedCompanyCard
        logo={gitlabLogo}
        rating={2.6}
        employerName="Gitlab"
        location="New York, USA"
        vacancies={0}
        reviewCount={7000}
      />
    </div>

    {/* <div className="grid grid-cols-3 w-full">
      <div className="flex flex-col md:flex-row gap-8 col-span-2">
        <FeaturedCompanyCard
          logo={appleLogo}
          rating={4.5}
          employerName="Apple Inc."
          location="New York, USA"
          vacancies={5}
          reviewCount={19000}
        />
        <FeaturedCompanyCard
          logo={mailchimpLogo}
          rating={3.2}
          employerName="Mailchimp"
          location="New York, USA"
          vacancies={1}
          reviewCount={21500}
        />
        <FeaturedCompanyCard
          logo={gitlabLogo}
          rating={2.6}
          employerName="Gitlab"
          location="New York, USA"
          vacancies={0}
          reviewCount={7000}
        />
      </div>
    </div> */}
  </div>
);

export default FeaturedJobPosts;
