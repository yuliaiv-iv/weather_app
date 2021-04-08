import React, { useEffect, useState } from 'react';
import Geocode from 'react-geocode';

function GeoLocationForm({ setLocation, setResult, result }) {

  const key = process.env.REACT_APP_GOOGLE_LOCATION_KEY;
  Geocode.setApiKey(key);
  const [initialValue, setInitialValue] = useState("");

  useEffect(() => {
    getLocation(result);
  }, [result]);

  function getLocation(city) {
    Geocode.fromAddress(city)
      .then((res) => {
        const lat = res.results[0].geometry.location.lat;
        const lng = res.results[0].geometry.location.lng;
        setLocation({ lat, lng })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleInputChange(e) {
    setInitialValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getLocation(initialValue);
    setInitialValue("");
    setResult(initialValue);
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Введите город'
        value={initialValue}
        onChange={handleInputChange}
      />
      <button type='submit'>Найти</button>
    </form>
  )
}

export default GeoLocationForm;