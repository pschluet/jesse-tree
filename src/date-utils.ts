import { startDate } from './App';

export const addDays = (date: Date, days: number): Date => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const getDayNumberForToday = (): number => {
  return Math.ceil(
    (new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
  );
};

export const isCurrentDay = (dayNumber: number): boolean => {
  return dayNumber === getDayNumberForToday();
};
