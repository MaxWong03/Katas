const multiplicationTable = (maxValue) =>{
  let multi = '';
  for(let i = 1; i <= maxValue; i++){
    for(let j = 1; j <= maxValue; j++){
      multi += ((i*j) + ' ');
    }
    multi += '\n';
  }
  return multi;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));