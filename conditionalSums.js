//Solution without using filter

const conditionalSum = (values, condition) => {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    if (condition === "even") {
      values[i] % 2 === 0? sum += values[i] : sum = sum;
      
    } else {
        values[i] % 2 === 1 ? sum += values[i] : sum = sum;
    }
  }
  return sum;
}


//Alternate solutions using filter
// const conditionalSum = (values, condition) => {
//   let arr;
//   let sum = 0;
//   if (condition === 'even'){
//     arr = values.filter((e) => e % 2 === 0);
//     for (let i = 0; i < arr.length; i++){
//       sum += arr[i];
//     }
//   }else{
//     arr = values.filter((e) => e % 2 === 1);
//     for (let i = 0; i < arr.length; i++){
//       sum += arr[i];
//     }
//   }
//   return sum;
// }


// console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
// console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
// console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
// console.log(conditionalSum([], "odd"));