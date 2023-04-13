import { appleLogo, mailchimpLogo, gitlabLogo, hamburger } from '../assets';
import {
  DesignSystem,
  LatestJobPosts,
  RecommendedJobPosts,
  FeaturedCompanyCard,
} from '../components';

import { getDate } from '../utils';

const Dashboard = () => (
  <main className="py-8 flex flex-col space-y-10">
    <div className="flex flex-col">
      <h1 className="font-bold ">
        Welcome to the Job Search Platform for Developers
      </h1>
      <p className="text-natural-2 text-base my-2">{getDate()}</p>
    </div>
    {/* <DesignSystem /> */}

    {/* layout */}

    <div className="flex flex-col justify-between md:flex-row">
      <LatestJobPosts />
      <RecommendedJobPosts />
    </div>

    <h2>Featured Companies</h2>
    <div className="grid grid-cols-3 w-full">
      <div className="flex flex-col md:flex-row gap-8 col-span-2">
        <FeaturedCompanyCard logo={appleLogo} rating={4.5} employerName="Apple Inc." location="New York, USA" vacancies={5} reviewCount={19000} />
        <FeaturedCompanyCard logo={mailchimpLogo} rating={3.2} employerName="Apple Inc." location="New York, USA" vacancies={1} reviewCount={21500} />
        <FeaturedCompanyCard logo={gitlabLogo} rating={2.6} employerName="Apple Inc." location="New York, USA" vacancies={0} reviewCount={7000} />
      </div>
    </div>
  </main>
);

export default Dashboard;
