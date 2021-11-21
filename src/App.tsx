import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import tree from './tree-512.png';
import { ReadingDay } from './ReadingDay';
import SwipeableViews from 'react-swipeable-views';
import { readings } from './readings';

export const startDate = new Date(2021, 10, 15, 0, 0, 0, 0);

const getDayNumberForToday = (): number => {
  return Math.ceil(
    (new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
  );
};

function App() {
  const currentDay = getDayNumberForToday();

  return (
    <div className="App">
      <img className="treeLogo" src={tree} alt="tree" />
      <SwipeableViews enableMouseEvents index={currentDay - 1}>
        {readings.map((_, i) => (
          <ReadingDay dayNumber={i + 1} />
        ))}
      </SwipeableViews>
    </div>
  );
}

export default App;
