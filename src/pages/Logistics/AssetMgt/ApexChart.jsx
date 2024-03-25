import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({props, x, category, subcatagoryData}) => {

  const [options, setOptions] = React.useState({
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900,
            },
          },
        },
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },
    title: {
      text: `${category.catagory}`,
    },
    xaxis: {
      categories: [`${subcatagoryData?.categorizedData[0]}`, 2009, 2010, 2011, 2012, 2013, 2014],
      labels: {
        formatter: (val) => val + 'K',
      },
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    tooltip: {
      y: {
        formatter: (val) => val + 'K',
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40,
    },
  });

  const [series, setSeries] = React.useState([
    {
      name: 'Marine Sprite',
      data: [44, 55, 41, 37, 22, 43, 21],
    },
    {
      name: 'Striking Calf',
      data: [53, 32, 33, 52, 13, 43, 32],
    },
    {
      name: 'Tank Picture',
      data: [12, 17, 11, 9, 15, 11, 20],
    },
    {
      name: 'Bucket Slope',
      data: [9, 7, 5, 8, 6, 9, 4],
    },
    {
      name: 'Reborn Kid',
      data: [25, 12, 19, 32, 25, 24, 10],
    },
  ]);

  return (
    <>
      {JSON.stringify(category,'x')}
      {/* <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      </div>
      <div id="html-dist"></div> */}
    </>
  );
};

export default ApexChart;
