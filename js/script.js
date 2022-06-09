"use strict";
const numberOfFilms = 5;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const answers = [];

answers[0] = prompt ('Один из последних просмотренных фильмов?', '');
answers[1] = prompt ('На сколько оцените его?', '');
answers[2] = prompt ('Один из последних просмотренных фильмов?', '');
answers[3] = prompt ('На сколько оцените его?', '');

const filmOne = answers[0];
const gradeOne = answers[1];
const filmTwo = answers[2];
const gradeTwo = answers[3];

const movies = {
    [filmOne]: gradeOne,
    [filmTwo]: gradeTwo
};

// console.log(movies);
