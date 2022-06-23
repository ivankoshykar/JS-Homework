let age = +prompt ('Введіть число відповідне вашому віку')

if ((age >= 10) && (age <= 20)) {
    message = (' років')
} else if ((age % 10) == 1) {
    message = (' рік')
} else if ((age % 10) == 2 || (age % 10) == 3 || (age % 10) == 4){
    message = (' роки')
} else if (age <= 0){
    message = (', ви точно живі? Введіть будь-ласка ваш корректний вік')
} else {
    message = (' років')
}

alert ('Вам ' + age + message)
