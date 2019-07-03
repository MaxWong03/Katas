const camelCase = (string) => {
  let camelString = string;
  for (let i = 0; i < string.length; i++){
    if(string[i] === ' '){
      camelString = string.replace(' ' + string[i+1], `${string[i+1]}`.toUpperCase());
      string = camelString;
    }
  }
  return camelString;
}




console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));