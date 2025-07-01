export const formatLongPrice = (price) => {
  if (typeof price !== 'number') return price;
  return price.toLocaleString('en-NG');
};
export const formatShortPrice = (price) => {
  if (typeof price !== 'number') return price;
  if (price >= 1_000_000) return `${(price / 1_000_000).toFixed(1)}M`;
  else if (price >= 1_000) {
    return `${(price / 1_000_000).toFixed(1)}K`;
  } else return price;
};
