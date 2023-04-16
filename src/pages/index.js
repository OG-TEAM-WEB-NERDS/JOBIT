import { LatestJobPosts, RecommendedJobPosts, FeaturedCompanyCard, Heading } from '../components';

import { appleLogo, mailchimpLogo, gitlabLogo } from '../assets';

const Dashboard = () => (
  <main className="py-28 flex flex-col space-y-10">
    <Heading heading="Welcome to the Job Search Platform for Developers" />
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
        <FeaturedCompanyCard logo={mailchimpLogo} rating={3.2} employerName="Mailchimp" location="San Francisco, USA" vacancies={1} reviewCount={21500} />
        <FeaturedCompanyCard logo={gitlabLogo} rating={2.6} employerName="Gitlab" location="San Francisco, USA" vacancies={0} reviewCount={7000} />
      </div>
    </div>
  </main>
);

export default Dashboard;
