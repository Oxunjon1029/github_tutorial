"use strict";
const newsQuestion = +prompt("Siz qancha kino ko'rgansiz?")

const personalNewsDB = {
  count: newsQuestion,
  news: {},
  actors: {},
  genres: [],
  private: false
}
const film = prompt("Sizni oxirgi ko'rgan filmingiz qaysi?");
const filmNumber = prompt("Uni qanday baholay olasiz?")

personalNewsDB.news[film] = filmNumber

console.log(personalNewsDB);