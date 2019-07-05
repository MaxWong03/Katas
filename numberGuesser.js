let prompt = require('prompt-sync')();

const getRandNum = () => {
  return Math.ceil(Math.random() * 100);
}
const secrectNum = getRandNum();
let ans = undefined;
let history = [];

while (ans != secrectNum) {
  ans = prompt('Guess a number: ');
  if (!Number(ans)) {
    console.log('Not a number! Try again!');
  }else if(history.includes(ans)){
    console.log('Already Guessed!');
  }else{
    if ( ans > secrectNum){
      console.log('Too High!');
    }else if (ans < secrectNum){
      console.log('Too Low!');
    }else{
      console.log(`You got it! You took ${history.length+1} attempts!`);
    }
    history.push(ans);
  }
}

