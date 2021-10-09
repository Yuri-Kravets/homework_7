//1.
let a = +prompt("введите число");
let a = +prompt("введите число");
    a === 0 ? alert('верно') :  alert('неверно')
//2.
let a = +prompt("введите число");
    a > 0 ? alert('верно') :  alert('неверно')
//3.
let a = +prompt("введите число");
    a < 0 ? alert('верно') :  alert('неверно')
//4.
let a = +prompt("введите число");
    a >= 0 ? alert('верно') :  alert('неверно')
//5.
let a = +prompt("введите число");
    a <= 0 ? alert('верно') :  alert('неверно')
//6.
let a = +prompt("введите число");
  a !== 0 ? alert('верно') :  alert('неверно')
//7.
let a = prompt("введите данные");
    a === 'test' ? alert('верно') :  alert('неверно')
//8.
let a = prompt("введите данные");
    a === '1' ? alert('верно') :  alert('неверно')
//9.
let a = prompt("введите данные");
    5 > a > 0  ? alert('верно') :  alert('неверно')
//10.
let a = +prompt('введите число');

  if (a === 0 || a === 2) {
    alert(a + 7 );
  } else {
      alert(a / 10);
    }
//11.

let a = +prompt('введите число');
let b = +prompt('введите число');

  if (a <= 1 && b >= 3) {
    alert (a + b);
  } else {
      alert (a - b);
  }
//12.

let a = +prompt('введите число');
let b = +prompt('введите число');

  if (11 > a > 2 || (14 > b >= 6)) {
    alert('верно');
  } else {
      alert('неверно');
  }
//13.
let num = +prompt('введите число');
let result;
  switch (num) {
    case 1:
      alert(result='зима');
      break;
    case 2:
      alert(result='весна');
      break;
    case 3:
      alert(result ='лето');
      break;
    case 4:
      alert(result ='осень');
      break;
    default:
      alert('неизвестное значение');
  }
