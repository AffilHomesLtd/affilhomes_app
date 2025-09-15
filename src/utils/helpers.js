import { quotes } from '../constants/constants';

export const getRandomQuote = () => {
  let index = 0;
  index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
};
export const removeLy = (text) => {
  if (typeof text !== 'string') return text;
  return text.slice(0, -2);
};
export const checkDateInput = (input) => {
  let ms;
  if (typeof input === 'number') {
    ms = input;
  } else if (input instanceof Date) {
    ms = input.getTime() - Date.now();
  } else if (typeof input === 'string') {
    const targetDate = new Date(input);
    if (isNaN(targetDate)) return 'Invalid date';
    ms = targetDate.getTime() - Date.now();
  } else {
    return 'Unsupported format';
  }

  return ms;
};
export const formatTimeLeft = (input) => {
  const ms = input;
  if (ms <= 0) return { expired: true };

  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, expired: false };
};
