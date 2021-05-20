export const roundNumber = (num) => {
  const length = num.toString().length;

  const thousand = Math.round((num / 1000) * 10) / 10;
  const million = Math.round((num / 1000000) * 10) / 10;

  if (length > 3 && length < 7) return `${thousand}k`;
  if (length >= 7) return `${million}m`;

  return num;
};
