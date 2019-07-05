const urlDecode = (url) => {
  decodeObject = {};
  urlArr = url.split('&');
  urlArr.forEach((u,i) => {
    urlArr[i] = u.split('=');
    Object.defineProperty(decodeObject, urlArr[i][0], {value: urlArr[i][1], enumerable: true, writable: true});
    for (let p in decodeObject){
      let value = decodeObject[p];
      Object.defineProperty(decodeObject, p, {value: value.replace(/%20/g, ' '), enumerable: true});
    }
  });

  return decodeObject;

}




console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);





// %20 represents a space character.
// Key-value pairs are represented using an = character: key=value
// Multiple key-value pairs are separated using a & character: key1=value1&key2=value2
// So the following URL encoded string:

// city=Vancouver&weather=lots%20of%20rain
// Could be converted to the following JavaScript object:

// {
//   city: "Vancouver",
//   weather: "lots of rain"
// }

// Expected Output
// {duck: "rubber"}
// {bootcamp: "Lighthouse Labs"}
// {city: "Vancouver", weather: "lots of rain"}
// "lots of rain"