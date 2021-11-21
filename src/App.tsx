import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import tree from './tree-512.png';
import { Grid } from '@mui/material';
import { ReadingDay } from './ReadingDay';

const getDayNumberForToday = (): number => {
  const startDate = new Date(2021, 10, 15, 0, 0, 0, 0);
  return Math.ceil(
    (new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
  );
};

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <img className="treeLogo" src={tree} alt="tree" />
        </Grid>
        <ReadingDay dayNumber={getDayNumberForToday()} />
      </Grid>
    </div>
  );
}

export default App;
