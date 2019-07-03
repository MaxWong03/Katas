const numberOfVowels = (data) => {
  let count = 0;
  const vowels = ['a','e','i','o','u'];
  for (let i = 0; i < data.length; i++){
    if (vowels.includes(data[i])){
      count++;
    }
  }
  return count;
};

// console.log(numberOfVowels("orange"));
// console.log(numberOfVowels("lighthouse labs"));
// console.log(numberOfVowels("aeiou"));