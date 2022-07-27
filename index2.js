let x = parseInt(prompt('Привіт, треба ввести цифру, яку піднесемо під степінь: '))
let n = parseInt(prompt('А тепер саму степінь: '))

function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
alert(`${x}` + ' в степені ' + `${n}` + ' дорівнює: ' + pow(x, n));