const organizeInstructors = (data) => {
  let organise = {};
  data.forEach((info) => {
    let courseName = info.course;
    if (courseName in organise) {
      organise[courseName].push(info.name);
    } else {
      organise[courseName] = [info.name];
    }
  });
  return organise;
}


console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));

// Expected Output
// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }

// Format:
// {
//   CourseName: [instructors]
// } 