"use strict";
let numberOfFilms;

function start()  {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const answers = [];

// answers[0] = prompt ('Один из последних просмотренных фильмов?', '');
// answers[1] = prompt ('На сколько оцените его?', '');
// answers[2] = prompt ('Один из последних просмотренных фильмов?', '');
// answers[3] = prompt ('На сколько оцените его?', '');





function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const filmOne = prompt ('Один из последних просмотренных фильмов?', ''),
              gradeOne = prompt ('На сколько оцените его?', '');
    
        if (filmOne != null && gradeOne != null && filmOne != '' && gradeOne != '' && filmOne.length < 50) {
            personalMovieDB.movies[filmOne] = gradeOne;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }    
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
        alert("Просмотренно довольно мало фильмов");
    } else if  ( personalMovieDB.count >= 10  && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();


// Задание 29.2.
function showMyDB(hiden) {
    if (!hiden) {
        console.log(personalMovieDB);
    }
}

showMyDB (personalMovieDB.privat);

// Задание 29.3.
function writeYourGeners() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);      
    }
}

writeYourGeners();