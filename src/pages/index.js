import {
  LatestJobPosts,
  RecommendedJobPosts,
  FeaturedCompanies,
  Heading,
} from '../components';
import { getDate } from '../utils';

const Dashboard = () => (
  <main className="py-6">
    <Heading heading="Welcome to the Job Search Platform for Developers" />

    {/* layout */}
    <div className="py-6 grid xl:grid-cols-3 gap-8">
      <div className="flex flex-col xl:col-span-2 gap-8">
        <LatestJobPosts />
        <FeaturedCompanies />
      </div>
      <RecommendedJobPosts />
    </div>
  </main>
);

export default Dashboard;
