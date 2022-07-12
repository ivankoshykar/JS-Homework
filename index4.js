let arr = [0,1,2,3];
alert('massive arr: ' + arr)
function funcShift() {
    let brr = [];
    for (let i = 0; i < arr.length; i++) {
       brr[i-1] = arr[i]
    }
    return brr;
}
alert('у початкового пасиву видалили пеший елемент: ' + funcShift())


// let arr = [0,1,2,3];
// alert('massive arr: ' + arr)
// function funcUnshift() {
//     let brr = [];
//     for (let i = -1; i < arr.length; i++) {
//        brr[i+1] = arr[i]
//     }
//     return brr;
// }
// alert('перед першим елементом виникає ще один: ' + funcUnshift())



// let arr = [0,1,2,3];
// alert('massive arr: ' + arr)
// function funcPop() {
//     let brr = [];
//     for (let i = 0; i < arr.length; i++) {
//        brr[i] = arr[i-1]
//     }
//     return brr;
// }
// alert('у початкового пасиву видалили останній елемент: ' + funcPop())


// let arr = [0,1,2,3];
// alert('massive arr: ' + arr)
// function funcPush() {
//     let brr = [];
//     for (let i = 0; i < arr.length; i++) {
//        brr[i] = arr[i+1]
//     }
//     return brr;
// }
// alert('до початкового пасиву додали елемент в кінець: ' + funcPush())