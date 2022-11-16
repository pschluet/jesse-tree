import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import tree from './tree-512.png';
import { AllReadings } from './AllReadings';

export const startDate = new Date(2022, 10, 15, 0, 0, 0, 0);

function App() {
  return (
    <div className="App">
      <img className="treeLogo" src={tree} alt="tree" />
      <AllReadings />
    </div>
  );
}

export default App;
