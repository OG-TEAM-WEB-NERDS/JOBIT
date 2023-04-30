import React, { useState } from 'react';
import Image from 'next/image';

import JobSearchCard from './JobSearchCard';
import { ChevronDownIcon } from '../assets';
import { useGetJobsQuery } from '../services/JSearch';
import { Loader } from '.';

const JobSearchPosts = () => {
  const [sortOn, setSortOn] = useState('Relevance');

  // const Id = '2HjjWrUgSxoAAAAAAAAAAA==';
  // const { data, isFetching, isError } = useGetJobDetailsQuery(Id);
  const { data, isFetching, isError } = useGetJobsQuery();

  if (isFetching) {
    return (
      <Loader />
    );
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

  return (
    <div>
      {/* job post header */}
      <div className="flex justify-between mx-4 pb-3">
        <div className="flex">
          <p className="text-base text-natural-1 dark:text-gray-200">
            Showing:
          </p>{' '}
          <h6 className="font-semibold text-black-3 ml-2">5 jobs</h6>
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
                <Image
                  src={ChevronDownIcon}
                  alt="Chevron icon"
                  width={20}
                  height={20}
                  className="grayscale"
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
                        onClick={() => setSortOn(items)}
                      >
                        {items}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* searched job posts */}
      <div>
        {data?.data?.map((job, i) => (
          <JobSearchCard key={i} job={job} i={i} />
        ))}
      </div>
    </div>
  );
};

export default JobSearchPosts;
