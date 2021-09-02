// function isEven(element) {
//   if (element % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(2));

// var res = [2, 4, 6, 8, 10, 12, 14].every(function isEven(element) {
//   if (element % 2 == 0) {
//     console.log("True");
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(res);
var ans = false;
// var res = [2, 4, 6, 8, 10].every((element) => (element % 2 == 0) );
var res = [2, 4, 5, 8, 10].every((element) => {
  console.log(element);
  return element % 2 == 0;
});
console.log(res);
