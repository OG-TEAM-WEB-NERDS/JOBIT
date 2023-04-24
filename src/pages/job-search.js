import React from 'react';
import { Button, FilterDropdown, Heading } from '../components';

import { FilterDropdowns } from '../samples/static-data';
import Searchbar from '../components/Searchbar';

const JobSearch = () => (
  <main className="py-6 flex flex-col space-y-10">
    <Heading heading="Let's find your dream job" />
    <Searchbar />
    <div className="grid md:grid-cols-4">
      <div className="flex flex-col gap-6">

        {/* Job Alert Card */}
        <div className="flex flex-col gap-4 bg-white dark:bg-black-2 rounded-xl p-4">
          <h6>Create Job Alert</h6>
          <p className="text-base text-natural-1">Increase an opportunity to get chance for new jobs.</p>
          <form className="flex flex-col gap-1">
            <input className="inputBordered" type="email" id="email" name="email" placeholder="Type your email" />
            <div className="mt-4">
              <Button primary outlined isSubmit fullWidth>Create Job Alert</Button>
            </div>
          </form>
        </div>

        {/* Filters */}
        <div className="hidden md:flex flex-col gap-6">
          {
            FilterDropdowns.map((filter, i) => filter?.options && <FilterDropdown key={i} label={filter.name} options={filter.options} />)
          }
        </div>

      </div>

    </div>
  </main>
);

export default JobSearch;
