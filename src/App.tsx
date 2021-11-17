import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { readings } from './readings';
import { Grid } from '@mui/material';
import tree from './tree-512.png';

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <img className="treeLogo" src={tree} alt="tree"/>
          <h1 className="day">Day {readings[0].day}</h1>
          <div className="date">
            {new Date().toLocaleDateString('en-US', { dateStyle: 'long' })}
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="readingBody">
            <h3 className="readingTitle">{readings[0].title}</h3>
            <p className="subtitle">
              {readings[0].bibleVerses} | {readings[0].ornamentName}
            </p>
            <p className="readingText">{readings[0].readingText}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
