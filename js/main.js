const getRandomInt = (min, max) => {
  if (min < 0 || min === max) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFraction = (min, max, accuracy) => {
  if (min < 0 || min === max) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  let number = Math.random() * (max - min) + min;
  return +number.toFixed(accuracy);
};

const NUMBER_OF_GUESTS = {
  min: 1,
  max: 10,
};
const NUMBER_OF_ROOMS = {
  min: 1,
  max: 5,
};

const PRICES = {
  min: 400,
  max: 3500,
};

const TYPES = ['palace', 'flat', 'house', 'bungalow'];

const CHECKINS = ['12:00', '13:00', '14:00'];

const CHECKOUTS = ['12:00', '13:00', '14:00'];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const ADVERTISEMENTS_COUNT = 10;

const TITLE = [
  'Аренда квартиры',
  'Сдам квартиру',
  'Аренда видовой квартиры',
  'Новая стильная квартира',
];

const DESCRIPTIONS = [
  'Квартира с качественным ремонтом из дорогих материалов.',
  'Установлена вся необходимая мебель и техника от ведущих производителей',
  'Тихая, уютная квартира.',
  'Хорошая уютная стильная квартира для комфортного проживания.',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const LOCATION = {
  xMin: 35.65,
  xMax: 35.7,
  yMin: 139.7,
  yMax: 139.8,
  accuracy: 5,
};

// const getRandomArrayElements = (elements) => {
//   const arrayLength = getRandomInt(1, elements.length);
//   let arrayIndex = [];
//   let resultArray = [];
//   for (let i = 0; i < elements.length; i++) {
//     arrayIndex.push(i);
//   }
//   arrayIndex.sort(() => Math.random() - 0.5);
//   for (let i = 0; i < arrayLength; i++) {
//     resultArray.push(elements[arrayIndex[i]]);
//   }
//   return resultArray;
// };

const getRandomArrayElements = (elements) => {
  const arrayLength = getRandomInt(1, elements.length);
  const resultArray = elements.sort(() => Math.random() - 0.5).slice(elements.length - arrayLength);
  return resultArray;
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};

let advertisements = [];

const getAvatarNumber = (count) => {
  return count < 9 ? '0' + (count + 1) : String(count + 1);
};

const createObject = (count = 0) => {
  const locationX = getRandomFraction(
    LOCATION.xMin,
    LOCATION.xMax,
    LOCATION.accuracy,
  );
  const locationY = getRandomFraction(
    LOCATION.yMin,
    LOCATION.yMax,
    LOCATION.accuracy,
  );
  return {
    author: {
      avatar: 'img/avatars/user' + getAvatarNumber(count) + '.png',
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      adress: locationX + ', ' + locationY,
      price: getRandomInt(PRICES.min, PRICES.max),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInt(NUMBER_OF_ROOMS.min, NUMBER_OF_ROOMS.max),
      guests: getRandomInt(NUMBER_OF_GUESTS.min, NUMBER_OF_GUESTS.max),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getRandomArrayElements(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayElements(PHOTOS),
    },
    location: {
      x: locationX,
      y: locationY,
    },
  };
}

const createObjects = () => {
  for (let i = 0; i < ADVERTISEMENTS_COUNT; i++) {
    advertisements.push(createObject(i));
  }
}

createObjects();
