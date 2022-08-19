import { DateTime } from 'luxon';

export const shortDate = (date: DateTime): string => {
  return date.toFormat('dd.MM.yyyy');
};

export const shortDate2 = (date: Date): string => {
  return (date.getDate() + '/' + (date.getMonth()).toFixed(2) + '/' + date.getFullYear());
};

export const longDateTime = (date: DateTime): string => {
  return date.toFormat('dd.MM.yyyy HH:mm');
};

export const thousandize = (number: number | null) => number !== null ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : '-';