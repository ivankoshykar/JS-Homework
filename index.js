alert('Привіт, це нещасний детектив.')

let nN = parseInt(prompt('Введіть цифри ПІН-коду, які на вашу думку могли вводитись. Від 1 до 4 цифр:'))
let nS = nN.toString()

const numbers = {
    1 : ['1', '2', '4'],
    2 : ['1', '2', '3', '5'],
    3 : ['2', '3', '6'],
    4 : ['1', '4', '5', '7'],
    5 : ['2', '4', '5', '6', '8'],
    6 : ['3', '5', '6', '9'],
    7 : ['4', '7', '8'],
    8 : ['5', '7', '8', '9', '0'],
    9 : ['6', '8', '9'],
    0 : ['0', '8'],
}

function getCodes(observedCode) {
    const initialLength = observedCode.length;

    switch (initialLength) {
        case 1:
            observedCode = '000' + observedCode;
            break;
        case 2:
            observedCode = '00' + observedCode;
            break;
        case 3:
            observedCode = '0' + observedCode;
            break;
        default:
            observedCode = observedCode;
            break;
    }

    const resultArr1 = numbers[observedCode[0]]
    const resultArr2 = numbers[observedCode[1]]
    const resultArr3 = numbers[observedCode[2]]
    const resultArr4 = numbers[observedCode[3]]

    let result = []

    resultArr1.forEach(el1 => {
        if (initialLength === 1) {
            result.push(el1)
        }
        resultArr2.forEach(el2 => {
            if (initialLength === 2) {
            result.push(`${el1}${el2}`)
            }
            resultArr3.forEach(el3 => {
                if (initialLength === 3) {
                    result.push(`${el1}${el2}${el3}`)
                }
                resultArr4.forEach(el4 => {
                    if (initialLength === 4) {
                        result.push(`${el1}${el2}${el3}${el4}`)
                    }
                });
            });
        });
    });

    return result;
}

alert('Оце такі варіанти ПІН-коду можливі: ' + getCodes(nS))
