"use strict";

const numberOfFilms = +prompt('How many films, do you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('One of the last movies do you watched?'),
      b = prompt('How you rate it?'),
      c = prompt('One of the last movies you watched?'),
      d = prompt('How you rate it?');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

