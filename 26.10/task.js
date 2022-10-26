/*
* false + true = false;
* true + false = false;
* false + false = false;
* true + true = true;
* *** && ***/

/***** 1 *****/
let time = 12;
let day = 'friday';
let result = time >=13 && day === 'friday';
console.log(result);

/***** 2 *****/
let year = 2022;
let century = 'gold';
let info = year >=2021 && century == 'silver';
console.log(info);

/***** 3 *****/
let color = 'red';
let number = 'first';
let end = color === 'yellow' && number < 1;
console.log(end);

/***** 4 *****/
let weather = 'warm';
let season = 'autumn';
let nature = weather === 'warm' && season == 'autumn';
console.log(nature);

/*
* false + true = true;
* true + false = true;
* false + false = false;
* true + true = true;
* *** || ***/

/***** 11 *****/

let age = 22;
let fon = 'blue';
let res = age >= 1 || fon === 'blue';
console.log(res)

/***** 22 *****/

let name = 'DDDD';
let lastName = 'BBBB';
let names = name === 'DDDD' || lastName == 'MMM';
console.log(names);

/***** 33 *****/

let a = 99;
let b = 'chrome';
let c = a >= 100 || b === 'google';
console.log(c);

/***** 44 *****/

let x = 'on';
let y = 'under';
let v = x === 'on' || y == 'under';
console.log(v);

/****** 1) *****/

let nums = 10;
nums++;
++nums;
nums--;
console.log(nums);

/****** 2) *****/

let nn = 47;
let rr = nn + 7;
let dd = nn - 18;
let ff = nn * 10;
let gg = nn / 15;
console.log(rr);
console.log(dd);
console.log(ff);
console.log(gg);

/****** 3) *****/

let num = 1;
// num = num += 12;
// num = num -= 14;
// num = num *= 5;
// num = num /= 7;
// num = num += 1;
num = num -= 1;
console.log(num);






























