import { DateTime } from 'luxon';

export const shortDate = (date: DateTime): string => {
  return date.toFormat('dd.MM.yyyy');
};

export const longDateTime = (date: DateTime): string => {
  return date.toFormat('dd.MM.yyyy HH:mm');
};

export const thousandize = (number: number | null) => number !== null ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : '-';