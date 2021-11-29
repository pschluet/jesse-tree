import styles from './ReadingDay.module.css';
import { readings } from './readings';
import { Button, Grid, IconButton } from '@mui/material';
import { startDate } from './App';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { addDays, isCurrentDay } from './date-utils';

export const ReadingDay = ({
  dayNumber,
  onIncrementClick,
  onDecrementClick,
  onGotoTodayClick,
}: {
  dayNumber: number;
  onIncrementClick: () => void;
  onDecrementClick: () => void;
  onGotoTodayClick: () => void;
}) => {
  const selectedReadings = readings[dayNumber - 1];
  const readingDate = addDays(startDate, dayNumber - 1);
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <div className={styles.leftButton}>
          {dayNumber > 1 && (
            <IconButton onClick={onDecrementClick}>
              <ArrowBackIosNewIcon fontSize="medium" />
            </IconButton>
          )}
        </div>
      </Grid>
      <Grid item xs={8}>
        <h1 className={styles.day}>Day {selectedReadings.day}</h1>
      </Grid>
      <Grid item xs={2}>
        <div className={styles.rightButton}>
          {dayNumber < readings.length && (
            <IconButton onClick={onIncrementClick}>
              <ArrowForwardIosIcon fontSize="medium" />
            </IconButton>
          )}
        </div>
      </Grid>
      <Grid item xs={12} id={styles.dateRow}>
        <div className={styles.date}>
          {readingDate.toLocaleDateString('en-US', { dateStyle: 'long' })}
        </div>
      </Grid>
      <Grid item xs={12}>
        {!isCurrentDay(dayNumber) && (
          <div className={styles.gotoTodayButton}>
            <Button onClick={onGotoTodayClick}>Go To Today</Button>
          </div>
        )}
        <div className={styles.readingBody}>
          <h3 className={styles.readingTitle}>{selectedReadings.title}</h3>
          <p className={styles.subtitle}>
            {selectedReadings.bibleVerses} | {selectedReadings.ornamentName}
          </p>
          {selectedReadings.readingText.map((text) => (
            <p className={styles.readingText}>{text}</p>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};
