"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function()  {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const filmOne = prompt ('Один из последних просмотренных фильмов?', '').trim(),
                  gradeOne = prompt ('На сколько оцените его?', '');
        
            if (filmOne != null && gradeOne != null && filmOne != '' && gradeOne != '' && filmOne.length < 50) {
                personalMovieDB.movies[filmOne] = gradeOne;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }    
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
            alert("Просмотренно довольно мало фильмов");
        } else if  ( personalMovieDB.count >= 10  && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function(privat) {
        if (!privat) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {    
       if (personalMovieDB.privat) {           
           personalMovieDB.privat = false;
       } else {
        personalMovieDB.privat = true;
       }
   },
    writeYourGeners: function() {         
        for (let i = 1; i < 2; i++) {
        //     let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        //     if (genre !== null || genre !== "") {
        //     personalMovieDB.genres[i - 1] = genre;      
        //     } else {
        //         i--; 
        //     }     
// Для ввода данных через запятую
           let genres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase();
            if (genres === null || genres === "") {
                i--;      
            } else {
                personalMovieDB.genres = genres.split(", ");
                personalMovieDB.genres.sort();
                     
            }
        }

        personalMovieDB.genres.forEach((message, i) => {                                
            console.log(`Любимый жанр №${i + 1} - это ${message}`);          
        });
    }        
};






