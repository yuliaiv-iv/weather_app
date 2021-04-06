import './App.css';
import { useState } from 'react';
import GeoLocationForm from './components/GeoLocationForm';
import Weather from './components/Weather';


// https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,minutely&units=metric&appid=95b282953c85800567709d10324d686e



export default function App() {

  const [location, setLocation] = useState(null);

  console.log(location)
  
  return (
    <div className="app">
      <GeoLocationForm setLocation={setLocation} />
      <Weather location={location} />
    </div>
  );
}
