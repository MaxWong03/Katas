const camelCase = (string) => {
  let camelString = string;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      camelString = string.replace(' ' + string[i + 1], `${string[i + 1]}`.toUpperCase());
      string = camelString;
    }
  }
  return camelString;
}

const pascalCase = (string) => {
  let pascalString = string;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      pascalString = string.replace(' ' + string[i + 1], `${string[i + 1]}`.toUpperCase());
      string = pascalString;
    }
  }
  return pascalString.replace(pascalString[0], pascalString[0].toUpperCase())
}

const snakeCase = (string) => {
  return string.replace(/ /g, '_');
}

const kebabCase = (string) => {
  return string.replace(/ /g, '-');
}

const titleCase = (string) => {
  let titleString = string;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      titleString = string.replace(' ' + string[i + 1], ` ${string[i + 1]}`.toUpperCase());
      string = titleString;
    }
  }
  return titleString.replace(titleString[0], titleString[0].toUpperCase());
}

const vowelCase = (string) => {
  let vowelString = string;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let c of string) {
    if (vowels.includes(c)) {
      vowelString = string.replace(c, c.toUpperCase());
      string = vowelString;
    }
  }
  return vowelString;
}

const consonantCase = (string) => {
  let consonantString = string;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let c of string) {
    if (!vowels.includes(c)){
      consonantString = string.replace(c, c.toUpperCase());
      string = consonantString;
    }
  }
  return consonantString;
}

const upperCase = (string) =>{
  return string.toUpperCase();
}

const lowerCase = (string) =>{
  return string.toLowerCase();
}

const makeCase = (string, format) => {
  let caseString = string;
  const precedence = {
    first: ['camel', 'pascal', 'snake', 'kebab', 'title'],
    second: ['vowel, consonant'],
    third: ['upper', 'lower']
  }
  let order = {first:[], second:[], third: []};
  Array.isArray(format) === true ? format = format : format = [format]; //convert the given format input in to an array
  for (let c of format){
    if (precedence.first.includes(c)){
      order.first.push(c);
    }else if (precedence.second.includes(c)){
      order.second.push(c);
    }else{
      order.third.push(c);
    }
  }
  for (let o in order){
    order[o].forEach((e) => {
      switch(e){
        case 'camel':
          caseString = camelCase(caseString);
          break;
        case 'pascal':
          caseString = pascalCase(caseString);
          break;
        case 'snake':
          caseString = snakeCase(caseString);
          break;
        case 'kebab':
          caseString = kebabCase(caseString);
          break;
        case 'title':
          caseString = titleCase(caseString);
          break;
        case 'vowel':
          caseString = vowelCase(caseString);
          break;
        case 'consonant':
          caseString = consonantCase(caseString);
          break;
        case 'upper':
          caseString = upperCase(caseString);
          break;
        case 'lower':
          caseString = lowerCase(caseString);
          break;
        default:
          caseString = caseString;
      }
    })
  }
  return caseString;
}



console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));




// Expected Output
// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING

// Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

// Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

// camel, pascal, snake, kebab, title
// vowel, consonant
// upper, lower