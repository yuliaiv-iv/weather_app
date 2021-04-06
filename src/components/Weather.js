import React, { useState, useEffect } from 'react';
import { Bar, defaults } from 'react-chartjs-2';
defaults.global.legend.display = false;

// const days = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ];

// const labels = [...Array(7)].map((_, i) => {
//   const date = new Date();
//   date.setDate(date.getDate() + i);
//   return days[date.getDay()];
// });

// const options = {
//   tooltips: { mode: 'index', intersect: false },
//   scales: {
//     xAxes: [
//       {
//         gridLines: false,
//         ticks: { fontColor: '#F680BC', fontSize: 10, padding: 20 },
//       },
//     ],
//     yAxes: [
//       {
//         gridLines: false,
//         ticks: { fontColor: '#F680BC', fontSize: 10, padding: 20 },
//       },
//     ],
//   },
// };

// const apiUrl =
//   'https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,minutely&units=imperial&appid=bb96c7f9ac6f57dc00333727c5407547';

function Weather({ location }) {

  return (
    <div className="chart">
      <Bar />
    </div>
  );
}

export default Weather;