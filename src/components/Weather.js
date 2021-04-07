import React, { useState, useEffect } from 'react';


function Weather({ location }) {

  const [weatherData, setWeatherData] = useState([]);
  const { lat, lng } = location;
  const { daily, current } = weatherData;

  useEffect(() => {
    function getWeather() {
      return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&units=metric&lang=ru&appid=bb96c7f9ac6f57dc00333727c5407547`)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setWeatherData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getWeather();
  }, [lat, lng])


  function upperLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  function convertDate(date) {
    const milliseconds = date * 1000;
    const dateObject = new Date(milliseconds);
    return upperLetter(dateObject.toLocaleString("ru", { weekday: "long" }))
  }

  console.log(weatherData)

  return (
    <>
      {weatherData.length === 0 ? null :
        <div className="content">
          <div className="current">
            <h3>Сегодня </h3>
            <h2>{current.temp.toFixed()} °​C</h2>
            <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`} />
          </div>
          <h3>{upperLetter(current.weather[0].description)}</h3>
          <table>
            <tr>
              <th>week day</th>
              <th></th>
              <th>Low</th>
              <th>High</th>
              <th>Humidity</th>
            </tr>
            {daily.map((item, index) => (
              <tr key={index}>
                <td>{convertDate(item.dt)}</td>
                <td>
                  <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
                </td>
                <td>{item.temp.min.toFixed()} °</td>
                <td>{item.temp.max.toFixed()} °</td>
                <td>{item.humidity}</td>
              </tr>
            ))}
          </table>
        </div>
      }
    </>
  );
}

export default Weather;