import styles from './ReadingDay.module.css';
import { readings } from './readings';
import { Grid, IconButton } from '@mui/material';
import { startDate } from './App';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const addDays = (date: Date, days: number) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const ReadingDay = ({
  dayNumber,
  onIncrementClick,
  onDecrementClick,
}: {
  dayNumber: number;
  onIncrementClick: () => void;
  onDecrementClick: () => void;
}) => {
  const selectedReadings = readings[dayNumber - 1];
  const readingDate = addDays(startDate, dayNumber - 1);
  // TODO: Arrows aren't the same distance from edges on mobile
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
      <Grid item xs={2} spacing={0}>
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
