import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const series = [70, 30];

  const options = {
    legend: {
      show: false, // This line disables the legend
    },
    colors: ["#3459D0", "#E3E6ED"],
    chart: {
      type: "donut",
    },
    label: false,

    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false, // Disable series label
          formatter: function (val, opts) {
            return opts.w.config.series[opts.seriesIndex] + "%";
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
};

export default PieChart;
