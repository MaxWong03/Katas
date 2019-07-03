const sumLargestNumbers = (data) => {
  const arr = data.sort((a,b) => b - a);
  return arr[0] + arr[1];
}

