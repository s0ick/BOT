'use strict';

let num = prompt('Угадай число от 1 до 100:');

function getInput(val){

  return function (num) {
    if(num === null){
      alert('Игра выключена');
      return 'Пользователь нажал "Отмена"';
    } else if(isNaN(num) || num === '') {
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
      return 'Это было число 47!';
    } 
  }
}
const conclusion = getInput(47);
console.dir(conclusion);
console.log(conclusion(num));