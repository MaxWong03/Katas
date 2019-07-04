const squareCode = (string) => {
  let squareString = '';
  string = string.replace(/ /g, '');
  let stringArr = [];
  let column = Math.ceil(Math.sqrt(string.length));
  while (string !== '') {
    stringArr.push(string.slice(0, column));
    string = string.slice(column, string.length);
  }
  for (let i = 0; i < stringArr[0].length; i++){
    squareString += stringArr[0][i];
    for (let j = 1; j < stringArr.length; j++){
      if (stringArr[j][i]){
        squareString += stringArr[j][i];
      }
    } 
    squareString += ' ';
  }
  return squareString;
};


console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));




// Square Code
// In Square Code, the spaces are removed from the english text and the characters are written into a square (or rectangle). For example, the sentence "If man was meant to stay on the ground god would have given us roots" is 54 characters long, once the spaces are removed, so it is written into a rectangle with 7 rows and 8 columns.

//     ifmanwas
//     meanttos
//     tayonthe
//     groundgo
//     dwouldha
//     vegivenu
//     sroots
// The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. If we round this number up (Math.ceil(Math.sqrt(54))), we get 8. If we use that for the number of characters on each line (the number of columns), then our text will be close to a square shape.

// The message is then coded by reading down the columns going left to right. For example, the message above is coded as:




// Expected Output
// clu hlt io  
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau