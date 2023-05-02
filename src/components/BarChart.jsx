import React from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

import { baseOptions } from '../utils/chartOptions';
import { ImageWrapper, Loader } from '.';
import { BriefcaseIcon, CrossIcon } from '../assets';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BarChart = ({ data, isFetching }) => {
  const { theme } = useTheme();

  // Chart Data
  const series = [
    {
      name: 'Minimum salary',
      data: data?.map((publisher) => (publisher?.min_salary || 0)),
    },
    {
      name: 'Maximum salary',
      data: data?.map((publisher) => (publisher?.max_salary || 0)),
    },
    {
      name: 'Median salary',
      data: data?.map((publisher) => (publisher?.median_salary || 0)),
    },
  ];

  // Chart Dynamic Theming
  const options = { ...baseOptions };

  options.xaxis = {
    ...options.xaxis,
    categories: data?.map((publisher) => (publisher?.publisher_name)),
    axisBorder: {
      color: theme === 'light' ? '#E2E2EA' : '#21212B',
    },
  };

  options.grid = {
    ...options.grid,
    borderColor: theme === 'light' ? '#E2E2EA' : '#13131A',
  };

  options.tooltip = {
    ...options.tooltip,
    theme,
  };

  if (isFetching) {
    return (
      <div className="flex flex-col gap-5 w-full lg:w-1/2 bg-white dark:bg-black-2 p-6 rounded-xl">
        <Loader />
      </div>
    );
  }

  if (data?.length) {
    return (
      <div className="flex flex-col gap-5 w-full lg:w-1/2 bg-white dark:bg-black-2 p-6 rounded-xl">
        <h2>
          Estimated Salary
          <span className="font-normal"> for a </span>
          {data?.jobTitle}
          <span className="font-normal"> located in </span>
          {data?.location}
          <span className="font-normal"> within in a </span>
          {data?.radius}km<span className="font-normal"> radius.</span>
        </h2>
        <Chart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
    );
  }

  if (data?.length <= 0) {
    return (
      <div className="flex flex-col gap-5 w-full lg:w-1/2 bg-white dark:bg-black-2 p-6 rounded-xl">
        <div className="flex items-center justify-center bg-natural-1 p-4 w-20 h-20 rounded-xl">
          <ImageWrapper
            src={CrossIcon}
            alt="Cross icon"
            width={40}
            height={40}
            styles="grayscale brightness-0 invert"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h2>Oops, there appears to be no data available</h2>
          <p>Please try increasing your radius search area or broadening your location or job title you want to search for and try again.</p>
        </div>
      </div>
    );
  }

  return (

    <div className="flex flex-col gap-8 w-full self-end lg:w-1/2 dark:bg-black-2 p-6 rounded-xl">
      {/* Else, show initial information about using the tool */}
      <div className="flex items-center justify-center bg-primary p-4 w-20 h-20 rounded-xl">
        <ImageWrapper
          src={BriefcaseIcon}
          alt="Briefcase icon"
          width={40}
          height={40}
          styles="grayscale brightness-0 invert"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h2>Find out estimated salary results in your area</h2>
        <p>Enter in a job title, your location and a radius you'd like to search within to get the lowest, highest and median salaries based on your added information.</p>
      </div>
    </div>
  );
};

export default BarChart;
