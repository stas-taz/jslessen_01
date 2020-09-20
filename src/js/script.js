"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films, do you watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films, do you watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of the last movies do you watched?'),
              b = prompt('How you rate it?');
        
        if (a != null && b != null && a != '' && b != '' &&a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('good job, man');
        } else {
            console.log('you are wrong, man!');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('It is not to much');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are a classic');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are graet');
    } else {
        console.log('What a fuck!');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

console.log(personalMovieDB);
