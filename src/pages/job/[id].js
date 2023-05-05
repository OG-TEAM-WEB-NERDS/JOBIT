import { useState } from 'react';
import { useRouter } from 'next/router';

import {
  SimilarJobPosts,
  JobDetail,
  SearchBar,
  Button,
} from '../../components';
import { ChevronLeftIcon } from '../../assets';

const JobDetailPage = () => {
  const router = useRouter();

  const [selectedJobTitle, setSelectedJobTitle] = useState(null);

  return (
    <section>
      <SearchBar path={router.pathname} />

      <Button
        secondary
        icon={ChevronLeftIcon}
        handleClick={() => router.back()}
      >
        Back
      </Button>

      <div className="flex flex-col justify-between md:flex-row mt-3">
        <div className="flex flex-col md:w-2/3">
          <div className=" bg-white dark:bg-black-2">
            <JobDetail setSelectedJobTitle={setSelectedJobTitle} />
          </div>
        </div>
        <div className="md:w-1/3 mx-2 px-2 my-3 md:my-0">
          <SimilarJobPosts selectedJobTitle={selectedJobTitle} />
        </div>
      </div>
    </section>
  );
};

export default JobDetailPage;
