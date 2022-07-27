
let a = parseInt(prompt('Введіть ділене'))
let b = parseInt(prompt('Введіть дільник'))

function quotient(a, b) {
    if (a < b) {
        return alert('Емм, так ми не порахуємо остачу')
    } else {
        return (a-(a%b))/b;
    }
}

alert( 'Неповна частка від ділення = ' + quotient(a,b) + ' (' + `${a}` + ' при цілочисельному діленні на ' + `${b}` + ')' )