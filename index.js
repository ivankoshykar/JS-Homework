const numbers = {
    0 : ['0', '8'],
    1 : ['1', '2', '4'],
    2 : ['1', '2', '3', '5'],
    3 : ['2', '3', '6'],
    4 : ['1', '4', '5', '7'],
    5 : ['2', '4', '5', '6', '8'],
    6 : ['3', '5', '6', '9'],
    7 : ['4', '7', '8'],
    8 : ['5', '7', '8', '9', '0'],
    9 : ['6', '8', '9'],
}

function getCodes(observedCode) {
    const initialLenght = observedCode.lenght;
    1
    switch (initialLenght) {
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

    resultArr1.forEach(element1 => {
        if (initialLenght === 1) {
            result.push(element1)
        }
        resultArr2.forEach(element2 => {
            if (initialLenght === 2) {
            result.push(`${element1}${element2}`)
            }
            resultArr3.forEach(element3 => {
                if (initialLenght === 3) {
                    result.push(`${element1}${element2}${element3}`)
                }
                resultArr4.forEach(element4 => {
                    if (initialLenght === 4) {
                        result.push(`${element1}${element2}${element3}${element4}`)
                    }
                });
            });
        });
    });

    return result;
}