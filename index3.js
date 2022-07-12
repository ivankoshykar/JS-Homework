

let arr1 = [];
let length = parseInt(prompt('Введіть довжину масиву'));

for (let i = 0; i < length; i++) {
    let n = parseInt(prompt('Введіть числа які входять в масив'));
    arr1.push(n);
}
alert('Оце що вийшло після вводу: ' + arr1);

let min = Math.min(...arr1);
let max = Math.max(...arr1);

alert('Мінімальне число в масиві: ' + min);
alert('А це максимальне число в масиві: ' + max);

let minIndex = arr1.indexOf(Math.min(...arr1));
let maxIndex = arr1.indexOf(Math.max(...arr1));
 
[arr1[minIndex], arr1[maxIndex]] = [arr1[maxIndex], arr1[minIndex]]

alert('Замінив їх місцями: ' + arr1)