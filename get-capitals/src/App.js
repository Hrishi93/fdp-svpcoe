import { useState } from 'react';
import './App.css';
import CapitalsData from './components/CapitalsData';

function App() {

  const [capital , getCapital]=useState('Delhi')
  return (
    <div className="App">
      <header className="App-header">
        <h1>Get Random Capitals of Indian States</h1>
        <CapitalsData  onSelectCapital={getCapital} />
        <p>{capital}</p>
      </header>
    </div>
  );
}

export default App;
