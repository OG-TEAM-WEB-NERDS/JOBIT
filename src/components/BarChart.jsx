import React from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

import { baseOptions } from '../utils/chartOptions';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BarChart = ({ data }) => {
  const { theme } = useTheme();

  // Chart Data
  const series = [
    {
      name: 'Minimum salary',
      data: data.map((publisher) => (publisher.min_salary)),
    },
    {
      name: 'Maximum salary',
      data: data.map((publisher) => (publisher.max_salary)),
    },
    {
      name: 'Median salary',
      data: data.map((publisher) => (publisher.median_salary)),
    },
  ];

  // Chart Dynamic Theming
  const options = { ...baseOptions };

  options.xaxis = {
    ...options.xaxis,
    categories: data.map((publisher) => (publisher.publisher_name)),
    axisBorder: {
      color: theme === 'light' ? '#E2E2EA' : '#13131A',
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

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      height={350}
    />
  );
};

export default BarChart;