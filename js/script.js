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

// Задание 24 урока первое решение
// let i = 0;
// while (i < 2) {
//     const filmOne = prompt ('Один из последних просмотренных фильмов?', ''),
//           gradeOne = prompt ('На сколько оцените его?', '');          

//     if (filmOne != null && gradeOne != null && filmOne != '' && gradeOne != '' && filmOne.length < 50) {
//         personalMovieDB.movies[filmOne] = gradeOne;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;   
// }

// Второе решение
// do {
//     const filmOne = prompt ('Один из последних просмотренных фильмов?', ''),
//           gradeOne = prompt ('На сколько оцените его?', '');          

//     if (filmOne != null && gradeOne != null && filmOne != '' && gradeOne != '' && filmOne.length < 50) {
//         personalMovieDB.movies[filmOne] = gradeOne;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// }
// while (i < 2);


if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    alert("Просмотренно довольно мало фильмов");
} else if  ( personalMovieDB.count >= 10  && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

console.log(personalMovieDB);