const HEAD_STYLE = `

.search {
  margin-bottom: 2rem;
}

.search__group--input {
  margin-bottom: 0.4375rem;
}

.search__group--checkbox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -ms-flex-align: center;

  gap: 0.3125rem;
}

.search__label-input {
  display: block;

  margin-bottom: 0.5rem;

  text-transform: uppercase;

  color: #ffffff;

  
  font-size: 1.4rem;
  font-weight: 700;
}

.search__input {
  display: block;

  width: 100%;
  max-width: 25rem;
  margin-bottom: 0.625rem;
  padding: 0.625rem 0.9375rem;

  border: 0.0625rem solid lighsteelblue;
  border-radius: 0.25rem;
}
.search__label-checkbox {
  padding: 0.8rem 0.3rem;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  color: #ffffff;

  font-size: 0.8rem;
}

.search__error-search {
  padding: 2rem 3rem;
  text-align: center;
  color: rgb(80, 17, 17);
  border: 0.125rem solid #fff;
  margin-bottom: 1.6rem;
  font-size: 2rem;
}

.search__start-message {
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  max-width: 60%;
  color: #cbce10;
  font-size: 2.6rem;
  text-shadow: 0.125rem 0.125rem 0.5rem #000000;
  letter-spacing: 0.125rem;
  text-align: center;
  margin: 4.6rem auto;
}

@media (max-width: 768px) {
  .search__start-message {
    font-size: 1.6rem;
  }
}

.movies {
  display: grid;
  margin-bottom: 3rem;
  gap: 1.4rem;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
}

.movies__movie {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  border: 0.125rem solid #ffffff;
  padding: 1rem;
  border-radius: 1rem;
}

.movies__image {
  width: 100%;
  height: 20rem;
  margin-bottom: 1rem;

  border-radius: 0.5rem;

  -o-object-fit: cover;
  object-fit: cover;
}

.movies__info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.movies__title {
  margin-bottom: 1.5rem;
  letter-spacing: 0.2rem;
  color: #ffffff;
  text-shadow: 0.0625rem 0.0625rem 0.5rem #193d8b;
}

.movies__year {
  color: #ffffff;
  text-shadow: 0.0625rem 0.0625rem 0.5rem #193d8b;
  font-size: 1.4rem;
}
`;

export default HEAD_STYLE;