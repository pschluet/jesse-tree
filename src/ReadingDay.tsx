import styles from './ReadingDay.module.css';
import { readings } from './readings';
import { Checkbox, Grid, IconButton } from '@mui/material';
import { startDate } from './App';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { addDays } from './date-utils';
import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';

export const ReadingDay = ({
  dayNumber,
  isCompleted,
  onIncrementClick,
  onDecrementClick,
  onCompletedClick,
}: {
  dayNumber: number;
  isCompleted: boolean;
  onIncrementClick: () => void;
  onDecrementClick: () => void;
  onCompletedClick: (dayNumber: number) => void;
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
        <div className={styles.readingBody}>
          <h3 className={styles.readingTitle}>{selectedReadings.title}</h3>
          <div className={styles.completedCheckboxContainer}>
            <Checkbox
              icon={<RadioButtonUnchecked />}
              checkedIcon={<CheckCircle />}
              checked={isCompleted}
              onClick={() => onCompletedClick(dayNumber)}
              className={styles.completedCheckbox}
            />
          </div>
          <p className={styles.subtitle}>
            {selectedReadings.bibleVerses} | {selectedReadings.ornamentName}
          </p>
          {selectedReadings.readingText.map((text, index) => (
            <p key={index} className={styles.readingText}>
              {text}
            </p>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};
