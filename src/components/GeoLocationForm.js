import React, { useEffect, useState } from 'react';
import Geocode from 'react-geocode';

Geocode.setApiKey('AIzaSyDp4os33WF6-4d-xFVyL0HsUUHN7dOml_w');

function GeoLocationForm({ setLocation }) {

  const [initialValue, setInitialValue] = useState('Boston');

  useEffect(() => {
    getLocation(initialValue);
  }, [])

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
  }

  const loc = initialValue;
  console.log(loc)

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={initialValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

export default GeoLocationForm;