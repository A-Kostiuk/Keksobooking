const getRandomNumber = (min, max, float = 0) => {
  if (min < 0 || min === max) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  let number = Math.random() * (max - min) + min;
  return +number.toFixed(float);
};

const getRandomArrayElements = (elements) => {
  const arrayLength = getRandomNumber(1, elements.length);
  const resultArray = elements.sort(() => Math.random() - 0.5).slice(elements.length - arrayLength);
  return resultArray;
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
};

export { getRandomNumber, getRandomArrayElements, getRandomArrayElement }
