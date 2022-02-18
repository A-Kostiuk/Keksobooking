import { getRandomNumber, getRandomArrayElements, getRandomArrayElement } from './util.js'

const ADVERTISEMENTS_COUNT = 10;

const NumberOfGuests = {
  MIN: 1,
  MAX: 4,
};
const NumberOfRooms = {
  MIN: 1,
  MAX: 3,
};

const Prices = {
  MIN: 200,
  MAX: 1200,
};

const Location = {
  XMIN: 35.65,
  XMAX: 35.7,
  YMIN: 139.7,
  YMAX: 139.8,
  ACCURACY: 5,
};

const Types = ['palace', 'flat', 'house', 'bungalow'];

const Checkins = ['12:00', '13:00', '14:00'];

const Checkouts = ['12:00', '13:00', '14:00'];

const Features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const TITLES = [
  'Аренда квартиры',
  'Сдам квартиру',
  'Аренда видовой квартиры',
  'Новая стильная квартира',
];

const Descriptions = [
  'Квартира с качественным ремонтом из дорогих материалов.',
  'Установлена вся необходимая мебель и техника от ведущих производителей',
  'Тихая, уютная квартира.',
  'Хорошая уютная стильная квартира для комфортного проживания.',
];

const Photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

let advertisements = [];



const getAvatarNumber = (count) => {
  return count < 9 ? '0' + (count + 1) : String(count + 1);
};

const createOffer = (location) => {
  return {
    title: getRandomArrayElement(TITLES),
    adress: Object.values(location).join(', '),
    price: getRandomNumber(Prices.MIN, Prices.MAX),
    type: getRandomArrayElement(Types),
    rooms: getRandomNumber(NumberOfRooms.MIN, NumberOfRooms.MAX),
    guests: getRandomNumber(NumberOfGuests.MIN, NumberOfGuests.MAX),
    checkin: getRandomArrayElement(Checkins),
    checkout: getRandomArrayElement(Checkouts),
    features: getRandomArrayElements(Features),
    description: getRandomArrayElement(Descriptions),
    photos: getRandomArrayElements(Photos),
  }
}

const createLocation = () => {
  const locationX = getRandomNumber(
    Location.XMIN,
    Location.XMAX,
    Location.ACCURACY,
  );
  const locationY = getRandomNumber(
    Location.YMIN,
    Location.YMAX,
    Location.ACCURACY,
  );
  return {
    x: locationX,
    y: locationY,
  }
}

const createAuthor = (count = 0) => {
  return {
    avatar: 'img/avatars/user' + getAvatarNumber(count) + '.png',
  }
}

const createObject = (count) => {
  const location = createLocation();
  return {
    author: createAuthor(count),
    offer: createOffer(location),
    location: location,
  };
}

const createObjects = () => {
  for (let i = 0; i < ADVERTISEMENTS_COUNT; i++) {
    advertisements.push(createObject(i));
  }
}

createObjects();

export { advertisements }
