import './App.css';
import { useState } from 'react';
import GeoLocationForm from './components/GeoLocationForm';
import Weather from './components/Weather';

export default function App() {

  const [location, setLocation] = useState(null);
  const [result, setResult] = useState('Бостон');

  return (
    <div className="app">
      <GeoLocationForm
        setLocation={setLocation}
        setResult={setResult}
        result={result}
      />
      {location &&
        <Weather
          location={location}
          result={result}
        />
      }
    </div>
  );
}
