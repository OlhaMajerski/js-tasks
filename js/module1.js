const solution = 108 + 223 - 2 * 5; // *+-  321
console.log(solution);

const height = '120px';
const height1 = Number.parseInt(height);
console.log(height1);
const height2 = parseInt(height);
console.log(height2);
const cyfer = '123.13Pi';
console.log(parseInt(cyfer));
const cyfer1 = 'ffo123';
const cyfer3 = parseInt(cyfer1);
console.log(cyfer3); //NaN
const cyfer4 = '56.5for$';
console.log(parseInt(cyfer4) + ' ' + cyfer); //56 123.13Pi
const border = '340.75px';
console.log(parseFloat(border));
const balance = '1550.65eu';
const floatedBalance = parseFloat(balance);
console.log(floatedBalance);

/* const userAge = prompt('Enter your age');
const result = +userAge > 18;
const result1 = Number(userAge) > 18;
const result2 = userAge > 18; //nejavne peretvorennia
const result3 = parseInt(userAge) > 18; //if u print 30yo, it will log true
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3); */

const accountBalance = 456.51;
const x = Math.round(accountBalance);
const y = Math.ceil(accountBalance);
const z = Math.floor(accountBalance);
const t = Math.cosh(accountBalance);
console.log(x, y, z, t);
const r = 34.34567;
const copyR = Math.round(r * 1000) / 1000;
console.log(copyR);

const min = 500;
const max = 1000;
const random = Math.round(Math.random() * (max - min) + min);
console.log(random);
const a = Math.round(Math.random() * 500);
console.log(a);

function showYourGuide() {
  console.log('smile');
  console.log('laugh');
  console.log('be kind');
  console.log('be yourself');
}
showYourGuide();

function returnResult() {
  const cat = 25;
  const dog = 45;
  const parrot = 55;
  const zoo = cat + dog + parrot;
  console.log(zoo);
  return zoo;
}
returnResult();
const show = returnResult();
console.log(show);

function sum(x, y) {
  const sum = x + y;
  return sum;
  //console.log(x, y);
}
const sol = sum(10, 20);
console.log(sol);

//==========================================//
