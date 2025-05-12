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
