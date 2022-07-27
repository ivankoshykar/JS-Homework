let n1 = parseInt(prompt('Введіть першу цифру'))
alert('Ми збережемо ' + sum(n1) + ', щоб додати до наступних цифр')
let n2 = parseInt(prompt('Введіть другу цифру'))
alert('Ми додали першу цифру до другої: ' + sum(n2))
let n3 = parseInt(prompt('Введіть третю цифру'))
alert('А тепер до суми попередніх цифр додали третю цифру : ' + sum(n3))

function sum(x) {
    let n = x;
    sum = function() {
        let arg = arguments[0] ? arguments[0] : 0;
        return n = n + arg;
    };
    return sum();
}

