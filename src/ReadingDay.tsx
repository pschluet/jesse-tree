import styles from './ReadingDay.module.css';
import { readings } from './readings';
import { Grid } from '@mui/material';

export const ReadingDay = ({ dayNumber }: { dayNumber: number }) => {
  const selectedReadings = readings[dayNumber - 1];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1 className={styles.day}>Day {selectedReadings.day}</h1>
        <div className={styles.date}>
          {new Date().toLocaleDateString('en-US', { dateStyle: 'long' })}
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
