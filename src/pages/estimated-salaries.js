import React from 'react';

import estimatedSalary from '../samples/estimated-salary';
import { BarChart, Button, Heading } from '../components';

const EstimatedSalaries = () => (
  <main className="py-6 flex flex-col lg:items-center lg:flex-row gap-10">

    <div className="flex flex-col gap-10 w-full lg:w-1/2">
      <Heading heading="Estimated Salaries" />

      {/* Form */}
      <form action="" method="post" className="flex flex-col gap-6 w-full">
        <div className="flex flex-col w-full gap-3">
          <label className="text-natural-2 font-semibold" htmlFor="job-title">Job Title</label>
          <input className="bg-natural-4 dark:bg-black-2 px-4 py-3 rounded-lg font-semibold border border-natural-3 dark:border-natural-1" type="text" id="job-title" name="job-title" />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col w-full gap-3">
            <label className="text-natural-2 font-semibold" htmlFor="location">Location</label>
            <input className="bg-natural-4 dark:bg-black-2 px-4 py-3 rounded-lg font-semibold border border-natural-3 dark:border-natural-1" type="text" id="location" name="location" />
          </div>
          <div className="flex flex-col w-full gap-3">
            <label className="text-natural-2 font-semibold" htmlFor="radius">Radius</label>
            <input className="bg-natural-4 dark:bg-black-2 px-4 py-3 rounded-lg font-semibold border border-natural-3 dark:border-natural-1" type="number" id="radius" name="radius" />
          </div>
        </div>

        <div className="mt-4">
          <Button primary isSubmit fullWidth>Get results</Button>
        </div>
      </form>
    </div>

    {/* Chart */}
    <div className="flex flex-col gap-5 w-full lg:w-1/2 bg-white dark:bg-black-2 p-6 rounded-xl">
      <h2>Estimated Salary<span className="font-normal"> for </span>NodeJS Developer<span className="font-normal"> in </span>New York</h2>
      <BarChart data={estimatedSalary.data} />
    </div>

  </main>
);

export default EstimatedSalaries;
