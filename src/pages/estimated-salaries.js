import React from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

import { Button, Heading } from '../components';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const EstimatedSalaries = () => {
  const { theme } = useTheme();

  const series = [
    {
      name: 'Minimum salary',
      data: [100000, 107000, 109000],
    },
    {
      name: 'Maximum salary',
      data: [121000, 125000, 124000],
    },
    {
      name: 'Median salary',
      data: [112000, 118000, 114000],
    },
  ];

  const options = {
    chart: {
      id: 'estimated-salary',
      fontFamily: "'Manrope', sans-serif",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ['Salary.com', 'ZipRecruiter', 'Talent.com'],
      labels: {
        style: {
          fontSize: '14px',
          fontWeight: 600,
          cssClass: 'fill-natural-2',
        },
      },
      axisBorder: {
        color: theme === 'light' ? '#E2E2EA' : '#13131A',
        height: 0.5,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
    },
    yaxis: {
      min(min) {
        if (min === 0) {
          return 80000;
        }
        return min - 10000;
      },
      max(max) {
        return max + 10000;
      },
      tickAmount: 2,
      labels: {
        style: {
          fontWeight: 600,
          cssClass: 'fill-natural-2',
        },
        formatter(val) {
          return `${Math.round(val / 1000)}k USD`;
        },
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      fontWeight: 600,
      onItemClick: {
        toggleDataSeries: false,
      },
      onItemHover: {
        highlightDataSeries: false,
      },
      labels: {
        colors: ['#92929D'],
      },
      markers: {
        radius: 50,
        fillColors: ['#FDDD8C', '#0BAB7C', '#FFBBD7'],
        offsetY: 1,
      },
    },
    grid: {
      borderColor: theme === 'light' ? '#E2E2EA' : '#13131A',
      padding: {
        top: 25,
      },
    },
    fill: {
      colors: ['#FDDD8C', '#0BAB7C', '#FFBBD7'],
      opacity: 1,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 7,
        borderRadiusApplication: 'end',
        columnWidth: '30px',
      },
    },
    stroke: {
      show: true,
      width: 5,
      colors: ['transparent'],
    },
    responsive: [
      {
        breakpoint: 1536,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '32px',
            },
          },
        },
      },
      {
        breakpoint: 1280,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '40px',
            },
          },
        },
      },
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '25px',
            },
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '30px',
            },
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '35px',
            },
          },
        },
      },
      {
        breakpoint: 520,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '45px',
            },
          },
        },
      },
      {
        breakpoint: 450,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '55px',
            },
          },
        },
      },
    ],
    tooltip: {
      theme,
      marker: {
        show: false,
      },
      x: {
        show: false,
      },
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
      active: {
        filter: {
          type: 'none',
        },
      },
    },
  };

  return (
    <main className="py-28 flex flex-col lg:items-center lg:flex-row gap-10">

      <div className="flex flex-col gap-10 w-full lg:w-1/2">
        <Heading heading="Estimated Salaries" />
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

      <div className="flex flex-col gap-5 w-full lg:w-1/2 bg-white dark:bg-black-2 p-6 rounded-xl">
        <h2>Estimated Salary<span className="font-normal"> for </span>NodeJS Developer<span className="font-normal"> in </span>New York</h2>
        <Chart
          options={options}
          series={series}
          type="bar"
          // height={300}
        />
      </div>

    </main>
  );
};

export default EstimatedSalaries;
