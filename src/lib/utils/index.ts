export function generateRandomBetween(
  min: number,
  max: number,
  exclude: number
) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  // const rndNum = Math.floor((min + max) / 2);
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return rndNum;
}
