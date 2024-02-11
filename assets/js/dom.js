// ? import HEAD_STYLE from '../../assets/css/style.css';
import HEAD_STYLE from './util-style.js';

let moviesList = null;
export let container = null;
export let inputSearch = null;
export let triggerMode = true;
let firstMessage = null;

// ! функція для рендера повідомлення про початок пошуку
const renderStartSearchMessage = () => {
  if (moviesList!== null) return;
  firstMessage = createElement({
    typeTag: 'h2',
    attrs: {
      class: "search__start-message",
      innerHTML: `! &#128521; Щоб знайти фільми введіть у пошук англійською назву чи частину назви фільму`
    },
    container,
    position: 'append',
  });
  return firstMessage;
}

// ! функція для видалення стартового повідомлення
const removeStartSearchMessage = () => {
  if (firstMessage === null) return; 
  document.querySelector('.search__start-message').remove();
  firstMessage = null;
}


// ! створення елементу
export const createElement = ({
  typeTag = 'div', 
  attrs = {}, 
  container = null, 
  position = 'append', 
  event = null, 
  handler = null
}) => {
  const el = document.createElement(typeTag);

  // встановлення атрибутів елементу
  Object.entries(attrs).forEach( ([key, value]) => {
    if (key === 'innerHTML') {
      el.innerHTML = value;
    } else {
      el.setAttribute(key, value);
    }
  });

  // позиціонування елементу
  if (container && position === 'prepend') container.prepend(el);
  if (container && position === 'append') container.append(el);

  // event
  if (event && handler && typeof handler === 'function') {
    el.addEventListener(event, handler);
  }
  
  return el;
}

// ! створення стилю сторінки
const createStyle = () => {
  createElement({
    typeTag:'style',
    attrs: {
      type: 'text/css',
      innerHTML: HEAD_STYLE,
    },
    container: document.head,
  });
}

// ! створення розмітки
export const createMarkup = () => {

  // div.container
  container = createElement({
    attrs: {class: 'container'}, 
    container: document.body,
    position: 'prepend',
  });

  // h1.title
  createElement({
    typeTag: 'h1', 
    attrs: {
      class: 'title', 
      innerHTML: 'Застосунок для пошуку фільмів'
    }, 
    container,
  });

  // div.search
  const searchCont = createElement({
    attrs: {class:'search'},
    container,
  });

  // div.search__group.search__group--input
  const searchGroupInput = createElement({
    attrs: {class:'search__group search__group--input'},
    container: searchCont,
  });

  // label.search__label-input
  createElement({
    typeTag: 'label',
    attrs: {
      class:'search__label-input',
      for: 'search',
      innerHTML: 'Пошук'
    },
    container: searchGroupInput,
  });

  // input.search__input
  inputSearch = createElement({
    typeTag: 'input',
    attrs: {
      class:'search__input',
      id:'search',
      type: 'search',
      placeholder: 'Назва фільму...',
    },
    container: searchGroupInput,
  });

  // div.search__group.search__group--checkbox
  const searchGroupCheckbox = createElement({
    attrs: {class:'search__group search__group--checkbox'},
    container: searchCont,
  });

  // input.search__input-checkbox
  createElement({
    typeTag: 'input',
    attrs: {
      class:'search__input-checkbox',
      id: 'checkbox',
      type: 'checkbox',
      value: 'true',
      checked: 'true',
    },
    container: searchGroupCheckbox,
    event: 'click',
    handler: () => {
      triggerMode =!triggerMode;
    }
  });

  // label.search__label-checkbox
  createElement({
    typeTag: 'label',
    attrs: {
      class:'search__label-checkbox',
      for: 'checkbox',
      innerHTML: 'Додавати фільми до вже існуючого списку',
    },
    container: searchGroupCheckbox,
  });

  renderStartSearchMessage();

  // div.movies
  moviesList = createElement({
    typeTag: 'section',
    attrs: {class:'movies'}, 
    container
  });
}

// ! отримання карточки фільму
export const addMovieToList = (movie) => {
  removeStartSearchMessage();
  // movie
  const divMov = createElement({
    attrs: {class:'movies__movie'},
    container: moviesList,
    position: 'prepend',
  });
  // imgMov
  const imgMov = createElement({
    typeTag: 'img',
    attrs: {
      class:'movies__image',
      src: /(http|https):\/\//i.test(movie.Poster) ? movie.Poster : './assets/images/no-image.jpg',
      alt: `${movie.Title} ${movie.Year}`
    },
    container: divMov,
    position: 'append',
  });
  // infoMov
  const infoMov = createElement({
    typeTag: 'div',
    attrs: {class:'movies__info'},
    container: divMov,
    position: 'append',
  });
  // yearMov
  createElement({
    typeTag: 'p',
    attrs: {
      class:'movies__year',
      innerHTML: movie.Year,
    },
    container: infoMov,
    position: 'append',
  });
  // titleMov
  createElement({
    typeTag: 'h2',
    attrs: {
      class:'movies__title',
      innerHTML: movie.Title,
    },
    container: infoMov,
    position: 'append',
  });
}

// ! видалення елементів розмітки зі списку фільмів
export const clearMoviesMarkup = () => {
  moviesList && (moviesList.innerHTML = '');
}

// ! рендерінг розмітки і стилів 
const RenderApp = () => {
  createMarkup();
  renderStartSearchMessage();

  createStyle();
}

export default RenderApp;