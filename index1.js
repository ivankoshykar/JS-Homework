let n1 = parseInt(prompt('Введіть першу цифру масиву'))
let n2 = parseInt(prompt('Введіть ще одну цифру')) 
let n3 = parseInt(prompt('І ще'))
let n4 = parseInt(prompt('Передостання'))
let n5 = parseInt(prompt('Остання цифра'))

let arr = [n1, n2, n3, n4, n5]

let max = arr[0]

function getMax(arr, index) {
    if (index === arr.length){
    return max
    }

    max = arr[index] > max ? arr[index] : max;
    index++;
    return getMax(arr, index)
}

alert('Оце найбільша цифра нашого масиву: ' + getMax(arr, 0))


function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
alert ('А ще порахували факторіал ' + `${max}` + ', він дорівнює: ' + factorial(max))