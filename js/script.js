"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

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

const filmOne = prompt ('Один из последних просмотренных фильмов?', ''),
      gradeOne = prompt ('На сколько оцените его?', ''),
      filmTwo = prompt ('Один из последних просмотренных фильмов?', ''),
      gradeTwo = prompt ('На сколько оцените его?', '');
 
personalMovieDB.movies[filmOne] = gradeOne;
personalMovieDB.movies[filmTwo] = gradeTwo;
   

// console.log(personalMovieDB);