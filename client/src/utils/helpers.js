import { quotes } from '../constants/constants';

export const getRandomQuote = () => {
  let index = 0;
  index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
};
