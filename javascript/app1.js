// Given var x = 25 and var y =7 , what is the result of x % y?

  // 7*3=21    25-24= 4   answer is 4.


// if var a = 15 and var b = 4, what is the value of a *b after adding 10 to a and subtracting 2 from b?

// a = 15 b = 4 a*b 15*4= 60+10=70-2 68=answer

// suppose var c = 12 and  var d = 3, calculate the result of c **d.?

// for var e = 10 and var f = 3, what is the value of e += f *2 ?

// considering var g = 20 and var h =4, what will be the outcome of g /h after adding 5 to g?

// Given var i = 8 and var j = 3, after subtracting 2 from i.?

// if var k = 18 and var l = 5, what is the result of k-1 +2 ?

// suppose var m = 7 and var n= 2, calculate the value of m ** n.?

// for var o = 13 and var p = 4, what will be the outcome of o|% (p+2)?

// Given var  q = 16 and var r =3, determine the result of q * r after dividing q by 2.?

// if var s = 25 and var t = 3, what is the value of s/t after subtracting 1 from s?

// suppose var u = 11 and var v = 3 , calculate the value u-v after adding 2 to v.?

// for var w = 22 and var x = 5 , what will be the outcome of w + (x ** 2)?

// Given var y = 19 and var z = 4 , determine the result of y % (z+ 1).?

// if var a = 10 and var b = 3 , what is the value of a 8 (b -2)?

// create a variable count with an initial value of 8. use the post-increament operator to increment count, then log the result to the console.?

// initialize a variable  x with a  value of 15. use the predecrement operator to decrement x, then display the updated value.?

// Declare a variable num  and set it to 25. use the post-decrement operator to decrement num, then print the result?

// start the variable value set to 10 . Apply the preincrement operator to value, and then output the new value?

// set a variable index to 5 . Apply the post-increment operator to index and display its value.?

// define a variable quantity and assign it the value 12. use the pre-decrement operator on quantity ,and then show its update value?

// initialize a variable counter with a value of 18. use the post-increment operator on counter and log the result?

// create  a variable  score set to 30. use the post-decrement operator on score, then print the results.?

// start with a variable value set to 20. Apply the pre-increment operator to value, and then output the new value.?

// declare a variable counter and set it to 8. Apply the post-decrement operator to counter, then dispay the result?

// <------------------------------------------------------------------------------------------------->

// var city1 = "karachi";

// var city2 = "Lahore";

// var city3 =  "GUJRAWALA";

var cities = ["karachi", "Lahore", "Faisalabad", "islamabad"];

console.log(cities[0]);
cities[0] = "karachi-the city of life";

document.write(cities[0] + " is the largest city of pakistan. <br>");
document.write(cities[1] + " is the secondlargest city of pakistan. <br>");
document.write(cities[2] + " is the thirdlargest city of pakistan. <br>");
document.write(cities[3] + " is the fourthlargest city of pakistan. <br>");

console.log(cities);

cities.push("peshwar", "quetta", "swatt", "kashmir");
console.log(cities);

cities.pop();
console.log("cities after-->pop", cities);

cities.unshift("baharia town","larkana","shaiwal");
console.log("cities after-->unshift", cities);

cities.shift();
console.log("cities after-->shift", cities);

var length = cities.length;
console.log(length);

console.log(cities[0]);