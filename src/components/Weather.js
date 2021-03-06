import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import {
  url,
  upperLetter,
  convertDate,
  setNumber,
  imageUrl,
} from "../utils/config";

function Weather({ location, result, error }) {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { lat, lng } = location;
  const { daily, current } = weatherData;
  const errorMsg = "Error... Search for other city or location";

  useEffect(() => {
    function getWeather() {
      setLoading(true);
      return fetch(url(lat, lng))
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setWeatherData(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    getWeather();
  }, [lat, lng]);

  return (
    <>
      {weatherData.length === 0 ? (
        <Loading />
      ) : (
        <div className="content">
          <h1 className={`${error ? "error" : ""}`}>
            {error ? errorMsg : upperLetter(result)}
          </h1>
          {
            loading ? (
              <Loading />
            ) : error ? (
              ""
            ) : (
              <>
                <div className="current">
                  <h2>{setNumber(current.temp)} °​C</h2>
                  <img
                    className="image"
                    src={imageUrl(current.weather[0].icon)}
                    alt="weather"
                  />
                  <h3>{upperLetter(current.weather[0].description)}</h3>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th className="field">Week day</th>
                      <th></th>
                      <th>Low</th>
                      <th>High</th>
                      <th>Humidity %</th>
                      <th>Wind km/hr</th>
                    </tr>
                    {daily.map((item, index) => (
                      <tr key={index}>
                        <td className="day">{convertDate(item.dt)}</td>
                        <td>
                          <img
                            src={imageUrl(item.weather[0].icon)}
                            alt="weather"
                          />
                        </td>
                        <td>{setNumber(item.temp.min)} °</td>
                        <td>{setNumber(item.temp.max)} °</td>
                        <td>{item.humidity}</td>
                        <td>{setNumber(item.wind_speed)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )
          }
        </div>
      )}
    </>
  );
}

export default Weather;
