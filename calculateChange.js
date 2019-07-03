class Bill{
  constructor (name, value, count){
    this.name = name;
    this.value = value,
    this.count = count;
  }
  getValue() {
    return this.value;
  }
  getName() {
    return this.name;
  }
  getCount() {
    return this.count;
  }
  addCount(num) {
    this.count += num;
    return this.count;
  }
  getChange(){
    return `${this.name}: ${this.count}`
  }
}


const calculateChange = (total, cash) => {
  // Valid denominations are as follows:

  // Twenty dollars - 2000
  // Ten dollars - 1000
  // Five dollars - 500
  // Two dollars - 200
  // One dollar - 100
  // Quarter(25¢)
  // Dime(10¢)
  // Nickel(5¢)
  // Penny(1¢)
  let change = cash - total;
  let allChange = '{';
  let giveBack = [
    new Bill('Twenty dollars', 2000, 0),
    new Bill('Ten dollars', 1000, 0),
    new Bill('Five dollars', 500, 0),
    new Bill('Two dollars', 200, 0),
    new Bill('One dollar', 100, 0),
    new Bill('Quarter', 25, 0),
    new Bill('Dime', 10, 0),
    new Bill('Nickel', 5, 0),
    new Bill('Penny', 1, 0),
  ];
  giveBack.forEach((bill)=>{
    if(change % bill.getValue() !== change){ 
      let billCount = Math.floor((change/bill.getValue()));
      change %= bill.getValue();
      bill.addCount(billCount);
      allChange += (bill.getChange() + ', ');
      
    }
  });
  allChange = allChange.substring(0,allChange.length-2);
  return allChange + ' }';
};




console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// Output
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }