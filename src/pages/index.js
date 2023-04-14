import {
  DesignSystem,
  LatestJobPosts,
  RecommendedJobPosts,
} from '../components';
import FeaturedJobPosts from '../components/FeaturedCompanies';

import { getDate } from '../utils';

const Dashboard = () => (
  <section className=" px-10 py-6 text-center md:text-left">
    <h3 className="font-bold text-sm md:text-lg">
      Welcome to the Job Search Platform for Developers
    </h3>
    <p className="text-natural-2 text-sm my-2 md:text-lg">{getDate()}</p>
    {/* <DesignSystem /> */}

    {/* layout */}
    <div className="flex flex-col justify-between md:flex-row mt-3 ">
      <div className="flex flex-col md:w-2/3 ">
        <LatestJobPosts />
        <FeaturedJobPosts />
      </div>
      <div className="md:w-1/3 mx-2 px-2 my-3">
        <RecommendedJobPosts />
      </div>
    </div>
  </section>
);

export default Dashboard;
