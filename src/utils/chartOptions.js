export const baseOptions = {
  chart: {
    id: 'estimated-salary',
    fontFamily: "'Manrope', sans-serif",
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    labels: {
      style: {
        fontSize: '14px',
        fontWeight: 600,
        cssClass: 'fill-natural-2',
      },
    },
    axisBorder: {
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
    offsetX: -30,
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
            borderRadius: 6,
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
            borderRadius: 5,
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
            borderRadius: 4,
            columnWidth: '55px',
          },
        },
        legend: {
          fontSize: '10px',
        },
        xaxis: {
          labels: {
            style: {
              fontSize: '12px',
            },
          },
        },
      },
    },
  ],
  tooltip: {
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
