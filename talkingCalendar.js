const talkingCalendar = (date) => {
  const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', "July", 'August', 'September', 'October', 'November', 'December'];
  const ndDay = ['02', '22'];
  const stDay = ['01', '21', '31'];
  const rdDay = ['03', '23',];
  const year = date.substring(0, 4);
  let month = date.substring(5, 7);
  let day = date.substring(8);
  month[0] === '0' ? month = monthArr[month[1] - 1] : month = monthArr[month - 1];
  if (ndDay.includes(day)) {
    if (day[0] === '0') {
      day = day[1] + 'nd';
    } else {
      day = day + 'nd';
    }
  } else if (stDay.includes(day)) {
    if (day[0] === '0') {
      day = day[1] + 'st';
    } else {
      day = day + 'st';
    }
  } else if (rdDay.includes(day)) {
    if (day[0] === '0') {
      day = day[1] + 'rd';
    } else {
      day = day + 'rd';
    }
  } else {
    if (day[0] === '0') {
      day = day[1] + 'th';
    } else {
      day = day + 'th';
    }
  }
  return `${month} ${day}, ${year}`;
}
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));


// Output:
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987