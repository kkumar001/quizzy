"use client";

import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
  const options = {
    cutout: '50%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    datasets: [
      {
        data: [50, 50],
        backgroundColor: ['#fbfe95', '#3c4441'],
        hoverBackgroundColor: ['#66d3af', '#daf8ef'],
      },
    ],
  };

  const textCenterPlugin = {
    id: 'textCenter',
    beforeDatasetsDraw(chart) {
      const { ctx, data } = chart;
      const dataset = data.datasets[0].data;
      const meta = chart.getDatasetMeta(0);
      const firstPoint = meta.data[0];

      ctx.save();
      ctx.font = 'bold 15px "Work Sans"';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${dataset[0]}%`, firstPoint.x, firstPoint.y);
      ctx.restore();
    },
  };

  return (
    <div className='text-center'>
      <Doughnut style={{ height: '40px'}} data={data} options={options} plugins={[textCenterPlugin]} />
      <div className='text-xs font-medium'>Hi</div>
    </div>
  );
};

export default DoughnutChart;