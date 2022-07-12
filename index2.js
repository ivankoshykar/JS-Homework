let min = parseInt(prompt('Введи звідки починається масив, тобто min ='))
let max = parseInt(prompt('Тепер тепер кінець масиву, тобто max ='))

let arr = []

for (let i = min; i < max; i++) {
    arr.push(i);
}

arr.sort(function() {return Math.random() - 0.5});

alert('Оце такий вийшов масив випадкових чисел: ' + arr)

function arraySum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        }
    return sum;
    }

let result = arraySum(arr)

let avg = (result/arr.length)

alert('А це середнє арифметичне чисел в масиві: ' + avg)






