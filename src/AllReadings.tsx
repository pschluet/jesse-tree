import styles from './AllReadings.module.css';
import { ReadingDay } from './ReadingDay';
import SwipeableViews from 'react-swipeable-views';
import { readings } from './readings';
import { useEffect, useRef, useState } from 'react';
import { getDayNumberForToday, isCurrentDay } from './date-utils';
import { Button } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

export const AllReadings = () => {
  const [selectedReadingIndex, setSelectedReadingIndex] = useState(
    getDayNumberForToday() - 1,
  );

  const previousReadingIndex = useRef<number>();
  useEffect(() => {
    previousReadingIndex.current = selectedReadingIndex;
  });

  const isCurrentDaySelected = () => {
    return isCurrentDay(selectedDayNumber());
  };
  const selectedDayNumber = (): number => {
    return selectedReadingIndex + 1;
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
          startIcon={
            // If I'm at a day greater than today or if I'm at today and
            // I just came from a day greater than today (so the arrow doesn't
            // go away during the fade transition)
            (selectedDayNumber() > getDayNumberForToday() ||
              (selectedDayNumber() === getDayNumberForToday() &&
                previousReadingIndex.current &&
                previousReadingIndex.current > selectedReadingIndex)) && (
              <ArrowBack />
            )
          }
          endIcon={
            // If I'm at a day less than today or if I'm at today and
            // I just came from a day less than today (so the arrow doesn't
            // go away during the fade transition)
            (selectedDayNumber() < getDayNumberForToday() ||
              (selectedDayNumber() === getDayNumberForToday() &&
                previousReadingIndex.current &&
                previousReadingIndex.current < selectedReadingIndex)) && (
              <ArrowForward />
            )
          }
          variant="outlined"
          size="small"
        >
          Today
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
