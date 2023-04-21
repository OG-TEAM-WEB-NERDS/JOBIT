import React from 'react';

import jobs from '../samples/search';
import JobSearchCard from './JobSearchCard';
import { ChevronIcon } from './icons';

const JobSearchPosts = () => {
  return (
    <div>
      {/* job post header*/}
      <div className="flex justify-between mx-4 pb-3">
        <div className="flex">
          <p className="text-base text-natural-1">Showing:</p>{' '}
          <h6 className="font-semibold text-black-3 ml-2">5 jobs</h6>
        </div>
        <div className="flex ">
          <p className="opacity-0 md:opacity-100">Sort by:</p>
          <div className="group">
            <div className="flex ">
              <p className="font-semibold text-black-3 mx-2">Relevance</p>
              <button
                type="button"
                className="flex items-center justify-between cursor-pointer select-none"
              >
                <div className="rotate-180">
                  <ChevronIcon />
                </div>
              </button>
            </div>

            {/* Sort Dropdown Menu  */}
            <div className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 group-hover:block">
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
        {jobs.data.map((job, i) => (
          <JobSearchCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default JobSearchPosts;
