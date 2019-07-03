const urlEncode = (string) => {
  string = string.trim();
  for (let i = 0; i < string.length; i ++){
    if (string[i] === ' '){
      string = string.substring(0,i) + '%20' + string.substring(i+1);
    }
  } 
  return string;
}


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));