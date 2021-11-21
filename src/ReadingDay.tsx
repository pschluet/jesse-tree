import styles from './ReadingDay.module.css';
import { readings } from './readings';
import { Grid, IconButton } from '@mui/material';
import { startDate } from './App';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const addDays = (date: Date, days: number) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const ReadingDay = ({ dayNumber }: { dayNumber: number }) => {
  const selectedReadings = readings[dayNumber - 1];
  const readingDate = addDays(startDate, dayNumber - 1);

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <div className={styles.leftButton}>
          <IconButton classes={[styles.leftButton]}>
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
        </div>
      </Grid>
      <Grid item xs={8}>
        <h1 className={styles.day}>Day {selectedReadings.day}</h1>
      </Grid>
      <Grid item xs={2} spacing={0}>
        <div className={styles.rightButton}>
          <IconButton>
            <ChevronRightIcon fontSize="large" />
          </IconButton>
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
