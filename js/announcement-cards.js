import { advertisements } from './data.js'

const cardTemplate = document.querySelector('#card').content;
const articleCardTemplate = cardTemplate.querySelector('.popup');

const getTypeText = (type) => {
  switch (type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
  }
}

const createPhotos = (photos, list) => {
  const photoTemplate = photos.querySelector('.popup__photo');
  list.forEach(element => {
    const photo = photoTemplate.cloneNode(true);
    photo.src = element;
    photos.appendChild(photo);
  });
  photoTemplate.remove();
}

const createCard = ({ offer, author }) => {
  const card = articleCardTemplate.cloneNode(true);
  const photos = card.querySelector('.popup__photos');
  card.querySelector('.popup__title').textContent = offer.title;
  card.querySelector('.popup__text--address').textContent = offer.adress;
  card.querySelector('.popup__text--price').textContent = offer.price + '$/ночь.';
  card.querySelector('.popup__type').textContent = getTypeText(offer.type)
  card.querySelector('.popup__text--capacity').textContent = offer.rooms + ' комнаты для ' + offer.guests + ' гостей';
  card.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ', выезд до ' + offer.checkout; + '.';
  card.querySelector('.popup__features').textContent = offer.features.join(', ');
  card.querySelector('.popup__description').textContent = offer.description;
  card.querySelector('.popup__avatar').src = author.avatar;
  createPhotos(photos, offer.photos);
  return card;
}

const createAnnouncementCards = () => {
  let cardsListFragment = document.createDocumentFragment();
  advertisements.forEach((advertisement) => {
    cardsListFragment.appendChild(createCard(advertisement));
  });
  return cardsListFragment;
}

export { createAnnouncementCards }
