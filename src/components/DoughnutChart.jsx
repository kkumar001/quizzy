"use client";

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';

ChartJS.register( ArcElement, Tooltip, Legend );

const options = {
    cutout: '50%', // Adjust the cutout percentage to control the size of the hole
    plugins: {
        responsive: true,
        legend: {
            display: false,
        },
    },
}

const data = {
    //labels: ['Completed', 'Remaining'],
    datasets: [
        {
            data: [50, 50], // Adjust these values based on your data
            backgroundColor: ['#fbfe95', '#3c4441'], // Adjust colors as needed
            hoverBackgroundColor: ['#66d3af', '#daf8ef'],
        },
    ],
};

const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
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
    }
}

const DoughnutChart = () => {


  return (
    <div className='text-center'>
            <Doughnut style={{ height: '37px'}} data={data} options={options} plugins={[textCenter]}/>
            <div className='text-lg font-medium'>
                <p className='text-[#f1fe96]'>4/7 <br /><span className='text-white'>Streak</span></p>
            </div>
        </div>
  );
};

export default DoughnutChart;