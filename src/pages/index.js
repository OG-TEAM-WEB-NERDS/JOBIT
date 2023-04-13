import {
  DesignSystem,
  LatestJobPosts,
  RecommendedJobPosts,
} from '../components';

import { getDate } from '../utils';

const Dashboard = () => (
  <main className="py-8">
    <h1 className="font-bold ">
      Welcome to the Job Search Platform for Developers
    </h1>
    <p className="text-natural-2 text-base my-2">{getDate()}</p>
    {/* <DesignSystem /> */}

    {/* layout */}
    <div className="flex flex-col justify-between md:flex-row">
      <LatestJobPosts />
      <RecommendedJobPosts />
    </div>
  </main>
);

export default Dashboard;
