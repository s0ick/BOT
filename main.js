'use strict';

let num = prompt('Угадай число от 1 до 100:');
let count = 10;

function getInput(val){
  return function (count, num) {
    if(num === null){
      alert('Игра выключена');
      return 'Пользователь нажал "Отмена"';
    } else if(count === 0) {
      if(confirm('Попытки закончились, хотите сыграть еще?')){
        count = 10;
        num = prompt('Угадай число от 1 до 100:');
        return conclusion(count, num);
      } else {
        alert('Игра выключена');
        return 'Пользователь нажал "Отмена"';
      }
    } else if(isNaN(num) || num === '') {
      alert('Введите число!');
      num = prompt('Угадай число от 1 до 100:');
      return conclusion(count, num);
    } else if(+num < val) {
      count--;
      alert(`Загаданное число больше, осталось попыток ${count}`);
      num = prompt('Угадай число от 1 до 100:');
      return conclusion(count, num);
    } else if(+num > val) {
      count--;
      alert(`Загаданное число меньше, осталось попыток ${count}`);
      num = prompt('Угадай число от 1 до 100:');
      return conclusion(count, num);
    } else if(+num === val) {
      if(confirm('Поздравляю, игра пройдена! Хотите сыграть еще?')){
        count = 10;
        num = prompt('Угадай число от 1 до 100:');
        return conclusion(count, num);
      } else {
        alert('Игра выключена');
        return 'Это было число 47!';
      }
    } 
  }
}
const conclusion = getInput(47);
console.dir(conclusion);
console.log(conclusion(count, num));