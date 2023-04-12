import {
  DesignSystem,
  LatestJobPosts,
  RecommendedJobPosts,
} from '../components';

import { getDate } from '../utils';

const Dashboard = () => (
  <section className="container mx-auto px-6 py-8">
    <h3 className="font-bold ">
      Welcome to the Job Search Platform for Developers
    </h3>
    <p className="text-natural-2 text-base my-2">{getDate()}</p>
    {/* <DesignSystem /> */}

    {/* layout */}
    <div className="flex flex-col justify-between md:flex-row">
      <LatestJobPosts />
      <RecommendedJobPosts />
    </div>
  </section>
);

export default Dashboard;
