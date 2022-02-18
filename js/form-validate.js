const form = document.querySelector('.ad-form');
const timein = form.querySelector('#timein');
const timeout = form.querySelector('#timeout');

timein.addEventListener('change', () => {
  timeout.value = timein.value
})

addEventListener('change', () => {
  timein.value = timeout.value
})

const type = form.querySelector('#type');
const price = form.querySelector('#price');

const getTrueTypePlaceholder = () => {
  if (type.value === 'flat') {
    price.placeholder = '1000'}
}
getTrueTypePlaceholder()

type.addEventListener('change', () => {
  switch (type.value) {
    case ('bungalow'):
      price.placeholder = '0'
      break;
    case ('flat'):
      price.placeholder = '1000'
      break;
    case ('house'):
      price.placeholder = '5000'
      break;
    case ('palace'):
      price.placeholder = '10000'
      break;
  }
})



