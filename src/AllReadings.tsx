import { ReadingDay } from './ReadingDay';
import SwipeableViews from 'react-swipeable-views';
import { readings } from './readings';
import { useState } from 'react';
import { startDate } from './App';

const getDayNumberForToday = (): number => {
  return Math.ceil(
    (new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
  );
};

export const AllReadings = () => {
  const [selectedReadingIndex, setSelectedReadingIndex] = useState(
    getDayNumberForToday() - 1,
  );

  return (
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
  );
};
