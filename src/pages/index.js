import {
  LatestJobPosts,
  RecommendedJobPosts,
  FeaturedJobPosts,
  Heading,
} from '../components';
import { getDate } from '../utils';

const Dashboard = () => (
  <section className="py-6 text-center md:text-left">
    <Heading heading="Welcome to the Job Search Platform for Developers" />
    {/* <DesignSystem /> */}

    {/* layout */}
    <div className="flex flex-col justify-between md:flex-row mt-3 ">
      <div className="flex flex-col md:w-2/3 ">
        <LatestJobPosts />
        <FeaturedJobPosts />
      </div>
      <div className="md:w-1/3 mx-2 px-2 my-3 md:my-0">
        <RecommendedJobPosts />
      </div>
    </div>
  </section>
);

export default Dashboard;
