console.log('Home Work 4');


// function getRange(min, max, step) {
//     let get = [];
//
//     for (let i = min; i <= max; i += step) {
//         get.push(i);
//     }
//     return get;
// }
// console.log(getRange(1, 10, 1));
// console.log(getRange(10, 30, 5));
// console.log(getRange(0, 100, 10));



// задание 1
let capitalizeString ="ЕВГЕНИЙ";
// let capitalizeString ="иВАНОВ";
let name = " ";
for (let i = 0; i <capitalizeString.length; i++){
  let char = capitalizeString[i];
  if(i === 0) {
      name += capitalizeString[i].toUpperCase();
  } else {
      name += capitalizeString[i].toLowerCase();
  }
}
console.log( capitalizeString, " -> ", name);

// Задание 2
function evenOddSum(...numbers) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenSum += numbers[i];
        } else {
            oddSum += numbers[i];
        }
    }
    return [evenSum, oddSum];
}
console.log(evenOddSum(50, 60, 60, 45, 71,));