let userName = prompt ('Please enter your name')
if (userName == 'admin') {
    alert ('Name correct');
} else {
    alert('Something went wrong...')
}

let Password = prompt ('Please enter your password')
if (Password == 'qWeRty123') {
    alert ('Password correct');
    alert ('Welcome ' + userName)
} else {
    alert('Something went wrong...')
}