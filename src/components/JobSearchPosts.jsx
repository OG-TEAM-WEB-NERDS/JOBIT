import React, { useState } from 'react';
import ImageWrapper from './shared/ImageWrapper';

import JobSearchCard from './JobSearchCard';
import { ChevronDownIcon } from '../assets';
import { useGetSearchedJobsQuery } from '../services/JSearch';
import { Loader } from '.';

const JobSearchPosts = ({
  query = 'all',
  page,
  employment_types,
  job_requirements,
  remote_jobs_only,
  setEndOfPage,
}) => {
  const [sortOn, setSortOn] = useState('Relevance');
  const [sortedData, setSortedData] = useState([]);

  const { data, isFetching, isError, isSuccess } = useGetSearchedJobsQuery({
    query,
    page,
    employment_types,
    job_requirements,
    remote_jobs_only,
  });

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div
        className="
        font-semibold
        text-black-3
        dark:text-gray-200
        mx-2"
      >
        Error while fetching!!!
      </div>
    );
  }

  const InitialData = data?.data;

  //Checking end of page for Pagination
  //data.length === 0 ? setEndOfPage(false) : setEndOfPage(true);

  //Sorting Data
  const handleSort = (e) => {
    const sortBy = e.target.innerText;
    setSortOn(sortBy);

    switch (sortBy) {
      case 'Latest':
        const latest = InitialData?.slice(0).sort(
          (a, b) =>
            new Date(b?.job_posted_at_datetime_utc).getTime() -
            new Date(a?.job_posted_at_datetime_utc).getTime()
        );

        setSortedData(latest);

        break;
      case 'Oldest':
        const oldest = InitialData?.slice(0).sort(
          (a, b) =>
            new Date(a?.job_posted_at_datetime_utc).getTime() -
            new Date(b?.job_posted_at_datetime_utc).getTime()
        );

        setSortedData(oldest);

        break;
      case 'Popular':
        const popular = InitialData?.slice(0).sort(
          (a, b) =>
            Number(b?.job_apply_quality_score) <
            Number(a?.job_apply_quality_score)
        );

        setSortedData(popular);

        break;
      default:
        setSortedData(InitialData);

        break;
    }
  };

  return (
    <div>
      {/* job post header */}
      <div className="flex justify-between mx-4 pb-3">
        <div className="flex">
          <p className="text-base text-natural-1 dark:text-gray-200">
            Showing:
          </p>{' '}
          <h6 className="font-semibold text-black-3 ml-2">
            {InitialData.length} jobs
          </h6>
        </div>
        <div className="flex ">
          <p className="opacity-0 md:opacity-100">Sort by:</p>
          <div className="group">
            <div className="flex ">
              <p className="font-semibold text-black-3 dark:text-gray-200 mx-2">
                {sortOn}
              </p>
              <button
                type="button"
                className="flex items-center justify-between cursor-pointer select-none"
              >
                <ImageWrapper
                  src={ChevronDownIcon}
                  alt="Chevron icon"
                  width={20}
                  height={20}
                  styles="grayscale"
                />
              </button>
            </div>

            {/* Sort Dropdown Menu  */}
            <div className="absolute z-10  hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 group-hover:block">
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHoverButton"
              >
                {['Relevance', 'Latest', 'Oldest', 'Popular'].map(
                  (items, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={(e) => handleSort(e)}
                      >
                        {items}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* searched job posts */}

      <div>
        {(sortedData.length === 0 ? InitialData : sortedData)?.map((job, i) => (
          <JobSearchCard key={i} job={job} i={i} />
        ))}
      </div>
    </div>
  );
};

export default JobSearchPosts;
