let x = parseInt(prompt('Привіт. Введи число х'))
let y = parseInt(prompt('Тепер ще треба ввести у'))

alert ('Ага. Зараз виведу всі числа які йдуть між ними, включаючи їх самих:')

if (y > x) {
    for (let i = x; i <= y; i++) {
        alert( i )
    }
} else if (x > y) {
    for (let i = y; i <=x; i++)
        alert( i )
    }