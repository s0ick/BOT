'use strict';

let num = prompt('Угадай число от 1 до 100:');

function getInput(val){

  return function (num) {
    if(num === null){
      alert('Игра выключена');
      return 'Пользователь нажал "Отмена"';
    } else if(isNaN(num) || num.trim() === '') {
      alert('Введите число!');
      num = prompt('Угадай число от 1 до 100:');
      return conclusion(num);
    } else if(+num < val) {
      alert('Загаданное число больше');
      num = prompt('Угадай число от 1 до 100:');
      return conclusion(num);
    } else if(+num > val) {
      alert('Загаданное число меньше');
      num = prompt('Угадай число от 1 до 100:');
      return conclusion(num);
    } else if(+num === val) {
      alert('Поздравляю, игра пройдена!');
      return `Это было число ${val}!`;
    } 
  }
}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const conclusion = getInput(randomInteger(1, 100));
console.dir(conclusion);
console.log(conclusion(num));