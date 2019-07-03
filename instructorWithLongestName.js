const instructorWithLongestName = (data) =>{
  let longestLength = 0;
  let longestLengthIndex = 0;
  for (let i = 0; i < data.length; i++){
    if((data[i].name).length > longestLength){
      longestLength = (data[i].name).length;
      longestLengthIndex = i;
    }
  }
  return data[longestLengthIndex];
}




// console.log(instructorWithLongestName([
//   {name: "Samuel", course: "iOS"},
//   {name: "Jeremiah", course: "Web"},
//   {name: "Ophilia", course: "Web"},
//   {name: "Donald", course: "Web"}
// ]));
// console.log(instructorWithLongestName([
//   {name: "Matthew", course: "Web"},
//   {name: "David", course: "iOS"},
//   {name: "Domascus", course: "Web"}
// ]));