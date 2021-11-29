import { ReadingDay } from './ReadingDay';
import SwipeableViews from 'react-swipeable-views';
import { readings } from './readings';
import { useState } from 'react';
import { getDayNumberForToday } from './date-utils';

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
          key={i + 1}
          dayNumber={i + 1}
          onIncrementClick={() =>
            setSelectedReadingIndex(selectedReadingIndex + 1)
          }
          onDecrementClick={() => {
            setSelectedReadingIndex(selectedReadingIndex - 1);
          }}
          onGotoTodayClick={() => {
            setSelectedReadingIndex(getDayNumberForToday() - 1);
          }}
        />
      ))}
    </SwipeableViews>
  );
};
