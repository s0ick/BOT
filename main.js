'use strict';

function getInput(val){
  let num = prompt('Угадай число от 1 до 100:');

  function checkVal(v, num) {
    if(num === null){
      alert('Игра выключена');
      return 'Пользователь нажал "Отмена"';
    } else if(isNaN(num) || num === '') {
      alert('Введите число!');
      num = prompt('Угадай число от 1 до 100:');
      return checkVal(v, num);
    } else if(+num < v) {
      alert('Загаданное число больше');
      num = prompt('Угадай число от 1 до 100:');
      return checkVal(v, num);
    } else if(+num > v) {
      alert('Загаданное число меньше');
      num = prompt('Угадай число от 1 до 100:');
      return checkVal(v, num);
    } else if(+num === v) {
      alert('Поздравляю, игра пройдена!');
      return 'Это было число 47!';
    } 
  }
  return checkVal(val, num);
}
console.log(getInput(47));