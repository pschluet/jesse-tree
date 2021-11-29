import styles from './AllReadings.module.css';
import { ReadingDay } from './ReadingDay';
import SwipeableViews from 'react-swipeable-views';
import { readings } from './readings';
import { useState } from 'react';
import { getDayNumberForToday, isCurrentDay } from './date-utils';
import { Button } from '@mui/material';

export const AllReadings = () => {
  const [selectedReadingIndex, setSelectedReadingIndex] = useState(
    getDayNumberForToday() - 1,
  );
  const isCurrentDaySelected = () => {
    return isCurrentDay(selectedReadingIndex + 1);
  };

  return (
    <>
      <div
        className={
          isCurrentDaySelected()
            ? styles.gotoTodayButtonHidden
            : styles.gotoTodayButton
        }
      >
        <Button
          onClick={() => setSelectedReadingIndex(getDayNumberForToday() - 1)}
          variant="outlined"
          size="small"
        >
          Go To Today
        </Button>
      </div>
      <SwipeableViews
        enableMouseEvents
        index={selectedReadingIndex}
        animateHeight={true}
        onChangeIndex={(index: number, indexLatest: number) => {
          setSelectedReadingIndex(index);
        }}
      >
        {readings.map((_, i) => (
          <ReadingDay
            key={i + 1}
            dayNumber={i + 1}
            onIncrementClick={() =>
              setSelectedReadingIndex(selectedReadingIndex + 1)
            }
            onDecrementClick={() => {
              setSelectedReadingIndex(selectedReadingIndex - 1);
            }}
          />
        ))}
      </SwipeableViews>
    </>
  );
};
