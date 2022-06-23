let N1 = prompt ('Введіть перше будь-яке число')
let N2 = prompt ('Введіть друге будь-яке число')
let N3 = prompt ('Введіть третє будь-яке число')
let N4 = prompt ('Введіть четверте будь-яке число')

let array = [N1, N2, N3, N4]
let product = Math.max(...array) * Math.min(...array)

alert ('Добуток найбільшого та найменшого чисел дорінює: ' + product)
