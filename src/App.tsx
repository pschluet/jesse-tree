import React, { useState } from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import tree from './tree-512.png';
import { AllReadings } from './AllReadings';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { FormatListNumbered, MenuBook } from '@mui/icons-material';

export const startDate = new Date(2021, 10, 15, 0, 0, 0, 0);

function App() {
  const [selectedNav, setSelectedNav] = useState(0);
  return (
    <div className="App">
      {selectedNav === 0 ? (
        <>
          <img className="treeLogo" src={tree} alt="tree" />
          <AllReadings />
        </>
      ) : (
        <div style={{ padding: '100px', textAlign: 'center' }}>New Page!</div>
      )}

      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 , paddingBottom: '20px'}}
        elevation={3}
      >
        <BottomNavigation
          value={selectedNav}
          onChange={(event, newIndex) => {
            setSelectedNav(newIndex);
          }}
        >
          <BottomNavigationAction icon={<MenuBook />} />
          <BottomNavigationAction icon={<FormatListNumbered />} />
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default App;
