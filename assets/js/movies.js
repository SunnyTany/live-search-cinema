import RenderApp, { container, createElement, addMovieToList, clearMoviesMarkup, inputSearch, triggerMode } from "./dom.js";

let searchLast = null;
let errorSearchMessage = null;

// ! видалення повідомлення про невдалий пошук
const removeErrorSearchMessage = () => {
  if (errorSearchMessage === null ) return;
  document.querySelector('.search__error-search').remove();
  errorSearchMessage = null;
}

// ! створення повідомлення про невдалий пошук
const renderErrorSearchMessage = () => {
  if (errorSearchMessage!== null) return;
  errorSearchMessage = createElement({
    typeTag: 'h2',
    attrs: {
      class: "search__error-search",
      innerHTML: `! &#129300; Нажаль, за цим запитом нічого не знайдено`
    },
    container,
    position: 'prepend',
  });
}

// ! функція debounce
const debounceTime = (() => {
  let timer = null;

  return (cb, ms) => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    timer = setTimeout(() => cb(), ms)
  }
})();

// ! отримання данних та перетворенняв їх у формат JSON
const getData = url => fetch(url)
  .then(response => response.json())
  .then(data => {
    if (!data || !data.Search) {
      renderErrorSearchMessage();
      throw Error('No data');
    }
    if (errorSearchMessage) {
      removeErrorSearchMessage();
    }
    return data.Search;
  })
  .catch(err => {
    console.log(err);
  });

// http://www.omdbapi.com/?apikey=18b8609f&s=ads

// ! обробник подій в інпуті пошуку
const inputSearchHandler = ({target}) => {
  debounceTime(() => {
    const searchString = target.value.trim();
  
    if (searchString.length < 3 || searchString === searchLast) return;
    if (!triggerMode) clearMoviesMarkup();
    
    getData(`http://www.omdbapi.com/?apikey=18b8609f&s=${searchString}`)
      .then(data => data.forEach(movie => addMovieToList(movie)))
      .catch(err => console.log(err))
  
    searchLast = searchString;
  }, 2000);
}

// ! init
const initApp = () => {
  RenderApp();
  inputSearch.addEventListener('input', inputSearchHandler);
}

export default initApp;