import React, { useState, useCallback, useEffect } from 'react';

import { Button, FilterDropdown, Heading, RangeSlider } from '../components';

import JobSearchPosts from '../components/JobSearchPosts';
import { usePrefetch } from '../services/JSearch';

import { FilterDropdowns } from '../samples/static-data';
import Searchbar from '../components/Searchbar';

const JobSearch = () => {
  const [search, setSearch] = useState('Software Developer');
  const [page, setPage] = useState(1);
  const [endOfPage, setEndOfPage] = useState(false);
  const [selection, setSelection] = useState({
    empType: 'FULLTIME',
    requirementType: 'no_experience',
    remote_jobs_only: false,
  });
  const prefetchData = usePrefetch('getSearchedJobs');

  const nextPageData = useCallback(() => {
    const potato = prefetchData({ query: search, page: page + 1, employment_types: selection.empType, job_requirements: selection.requirementType, remote_jobs_only: selection.remote_jobs_only }, { force: true });
    console.log(potato);
  }, []);

  useEffect(() => {
    const potato = prefetchData({ query: search, page: page + 1, employment_types: 'FULLTIME', job_requirements: 'no_experience', remote_jobs_only: false, setEndOfPage: false }, { force: true });
    console.log(potato);
  }, [page]);

  return (
    <main className="py-6 flex flex-col space-y-10">
      <Heading heading="Let's find your dream job" />
      <Searchbar setSearch={setSearch} selection={selection} />
      <div className="grid md:grid-cols-4 gap-20">
        <div className="flex flex-col gap-6">
          {/* Job Alert Card */}
          <div className="flex flex-col gap-4 bg-white dark:bg-black-2 rounded-xl p-4">
            <h6>Create Job Alert</h6>
            <p className="text-base text-natural-1">
              Increase an opportunity to get chance for new jobs.
            </p>
            <form className="flex flex-col gap-1">
              <input
                className="inputBordered"
                type="email"
                id="email"
                name="email"
                placeholder="Type your email"
              />
              <div className="mt-4">
                <Button primary outlined isSubmit fullWidth>
                  Create Job Alert
                </Button>
              </div>
            </form>
          </div>

          {/* Filters */}
          <div className="hidden md:flex flex-col gap-6">
            {FilterDropdowns.map(
              (filter, i) => filter?.options && (
              <FilterDropdown
                key={i}
                label={filter.name}
                options={filter.options}
                selection={selection}
                setSelection={setSelection}
              />
              ),
            )}
            <RangeSlider min={0} max={300000} />
          </div>
        </div>

        {/* JobSearch JobCard */}
        <div className="flex flex-col gap-1 md:col-span-3">
          <JobSearchPosts
            query={search}
            page={page}
            employment_types={selection.empType}
            job_requirements={selection.requirementType}
            remote_jobs_only={selection.remote_jobs_only}
            setEndOfPage={setEndOfPage}
          />

          <div className="flex flex-row justify-center">
            {page > 1 && (
            <Button
              handleClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </Button>
            )}

            <div className="flex px-4 mx-7 bg-natural-2 rounded-full">
              <p className="self-center text-white">{page}</p>
            </div>
            <Button
              handleClick={() => setPage((prev) => prev + 1)}
              onHover={nextPageData}
            >
              Next
            </Button>
          </div>
        </div>
        {/* Pagination set page to (page +/- 1) on  right/left click
        If page = 1 left button disable
        If no data right button disable */}

      </div>
    </main>
  );
};

export default JobSearch;
