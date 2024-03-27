// var food =['APPLE','ORANGE','BANANA','KEWI','GRAPES','WATERMALEON']
// console.log(food.length);
// 
// food.splice(1,1,'Aloveria');
// console.log('After add-->',food);
// 
// var copy = food.slice(1,5);
// console.log('after-->slice',copy);

// print table only 5;
// for(var i = 1; i <= 10; i++){
    // console.log(i*5);
// }

// var num = 0;
// 1 3 6 10 15 21 28 36 45 answer given
// for(var i = 0; i < 10; i++){
    // console.log('num=>',num,'i=>', i);
    // num = num + i;
    // console.log(num);
// }

// 9 8 7 6 5 4 3 2 1  answer given
// for(i = 0; i < 10; i++){
    // console.log( 9 - i );
// }

// 19 28 37 46 55 64 73 82 91 answer given
// for(i = 1; i < 10; i++){
    // console.log(i, 10 - i);
// }

// var num = [20 3 12 34 21 25 6 2]
// var largestnum = 0;
// for(i = 0 i < num.length; i++){
    // console.log("index=>", i, "arr value=>",num[i],"largestnumber=>", largestnum,"condition=>",num[i] > largestnum);
    // if (num[i] > largestNum) {
        // largestNum = num[i];
    //   }
    // }
    // console.log("Largest number is-> ", largestNum);

    // var nums = [20, 3, 12, 34, 21, 25, 6, 2];
    // var largestNum = 0;
    // for (var i = 0; i < nums.length; i++) {
      // console.log(
        // "index->",
        // i,
        // "arr value=>",
        // nums[i],
        // "largest number=>",
        // // largestNum,
        // "condition=>",
        // nums[i] > largestNum
      // );
      // if (nums[i] > largestNum) {
        // largestNum = nums[i];
      // }
    // }
    // console.log("Largest number is-> ", largestNum);

// tutorial no1  code<------------------------------------------------------------------>

    // console.log('THIS PROGRAM ADDS 1 2 AND 54');

    // function addThreeNumbers( a, b, c ){
      //  return a+b+c;
    // }

    // let c = addThreeNumbers( 1, 2, 54)
    // console.log(c);

    //  tutorial no2  code<--------------------------------------------------------------->

    //  console.log('This repl contains code for the ultimate javascript  video no 2' );
    //  let a = 67;
    //  console.log(a);
    //  a = 'harry';
    //  console.log(a);

    //  tutorial no 3 code<------------------------------------------------------------------->
    // console.log('javascript tutorial 3: var, let, and const');
    // let a = 45;
    // let b = 'faisal';    
    // b = 67
    // const author = 'harry';
    // let c = null;
    // let d = undefined;
    // let e = a + b;
    // {
      // let b = 'this';
      // console.log(b);
    // }
    // console.log(b);
    // console.log(author);

    // tutorial no 4 code<------------------------------------------------------------------------->
    // primative data types
    // these data type in javascript seven :

    // 1)Null.
    // 2)Number.
    // 3)Symbol.
    // 4)String.
    // 5)Boolean.
    // 6)BigInt.
    // 7)Undefined.

    // let a = null;
    // let b = 345;
    // let c = true;
    // let d = BigInt('567');
    // let e = 'faisal';
    // let f = Symbol('Iam a nice symbol');
    // let g = undefined;

    // console.log(a, b, c, d, e, f, g);
    // console.log(typeof c);
    
    // NON PRIMATATIVE DATA TYPES - OBJECTS IN JS

    // const item ={
      // 'Harry': true,
      // 'Shubham': false,
      // 'Lovish': 67,
      // 'Rohan': undefined,

    // }
    // console.log(item);
//  chapter no 1: q1

  // let  a = 'faisal';
  // let  b = 10
  // console.log( a+b );

  // chapter no1: q2
  // console.log(typeof (a+b));
  //  chapter no 1: q3
  // const a1 = {
    // name : 'faisal',
    // section  : 1,
    // isPrinciple : false,
  // }
  // chapter no 1: q4
  // a1['friend'] = 'shubham'
  // a1['name '] = 'lovish'
  // console.log(a1);
// 
  // const dict = {
    // Appreciate: "recognize the full worth of .",
    // Ataraxia: "a state of freedom from emotional disturbance and axiety.",
    // Yakka:     "work specially hard work."

  // }
  // console.log(dict['Appreciate']);
  // console.log(dict);
  
  // console.log('operators in js');
  // let a = 10;
  // let b = 4;
  // console.log( "a + b =", a+b);
  // console.log( "a - b =", a-b);
  // console.log( "a / b =", a/b);
  // console.log( "a * b =", a*b);
  // console.log( "a ** b =", a**b);
  // console.log( "a % b =", a%b);

  // console.log("++a =", ++a);         /* value a =11*/
  // console.log( "a++ =", a++);        /* value a = 11*/
  // console.log( '--a  =', --a )      /* value a =11*/  
  // console.log( "a--  =", a--);      /* value a =11*/
  // console.log( 'a =', a);
  // console.log('a-- =',a--);

  // ARITHMATIC OPERATOR:

  // let assignment = 1;
  // assignment += 5;
  // console.log(assignment);
 
  // comparision operator:
  // let comp1 = 6;
  // let comp2 = 7;
  // console.log('comp1 == comp2 is', comp1 == comp2);
  // console.log('comp1 != comp2 is', comp1 != comp2);
  // console.log('comp1 === comp2 is', comp1 === comp2);
  // console.log('comp1 !== comp2 is', comp1 !== comp2);
  // console.log('comp1 > comp2 is', comp1 > comp2);

  // logical operator

  // let x = 5;
  // let y = 6;
  // console.log(x<y && x==5);
  // console.log(x>y || x==5);
  // console.log(!false);
  // console.log(!true);

  // let a = prompt('Hey what you age?');
 /* NUMBER, STRING, UNDEFINED, NULL*/
//  a = Number.parseInt(a);
//  console.log(typeof a);

// //  if(a<0){
  //  alert('This is invalid age');
//  }
//  else if(a<9){
  //  alert('you are a kid and you cannot think of driving');
//  }
//  else if(a<18 && a>=9) {
  //  alert('you can drive now as you are think above 18');
//  }
//  else{
    // alert('you can now drive as you are above 18');
//  }
//  console.log('DONE');
//  console.log('you can',(a<18? 'not drive': 'drive'))

// let age = +prompt('Enter your age?');
  //  if(age>10 && age<20){
      // console.log('your age lies  between 10 and 20');
  //  }
  //  else{
      // console.log('your age  doesnt lies between 10 and 20');
  //  }
  
//  let age = prompt("Enter your age");
//  switch(age){
  // case '12':
    //  console.log('your age is 12');  
    //  break   
  // case '13':
    //  console.log('your age is 13');
    //  break
  // case '14':
    //  console.log('your age is 14');
    //  break
  // case '15':
    //  console.log('your age is 15');
    //  break
  // default:
    // console.log('your age is not special');
//  }
  
// let num = +prompt("Enter your age");
//  if(num % 2 == 0 && num % 3 == 0){
  // console.log('your no is divisible 2 and 3');
//  }
//  else{
  // console.log('your no is not divisible 2 and 3');
// }
// Tutorial no9
// let sum = 0;
// let n = +prompt('Enter your value of n')
// for(let i = 0; i < n; i++){  
  // sum +=(i+1)
  // console.log((i+1),'+');
  // console.log('sum of first' + n + 'natural no is' + sum);
// }

// var num =[20,3,12,34,21,25,6,2];
// var largestNum = num[0];
// for(i = 0; i < 10; i++){
  // if (num[i] > largestNum){
  // largestNum = num[i];
  // }
// }
// console.log("largest number is -->", largestNum);
// 
// var num =[20,3,12,34,21,25,6,2];
// var smallestNum = num[0];
// for(i = 0; i < 10; i++){
  // if (num[i] < smallestNum){
  // smallestNum = num[i];
  // }
// }
// console.log("smallest number is -->", smallestNum);
 
// var bonds = [2155, 1513, 1522, 2135, 1413, 1621, 2125, 1113, 1222];
// var bondnumber = prompt('ENTER YOUR BOND NUMBER');
// var won = false;
// for(i = 0; i < bonds.length; i++){
  // console.log(bonds[i], i);
  // if(bonds[i] == bondnumber){
    // won = true;
    // break;
  // }
// 
// }
// if(won) {
  // document.write('you won');
// }
// else{
  // document.write('your loss');
// }
// var  karachikeAlaqe = ['saddar','shahfaisal','gulshan','korangi','dha','lyari','malir','nazimabad','hyderi'];
// var  userElaqa = prompt('app kahan tashreef rakta hen');
// var  deliveryAvailable = false;
// for (var i = 0; i < karachikeAlaqe.length; i++){
  // if (karachikeAlaqe[i] === userElaqa){
    // deliveryAvailable = true;
    // document.write('delivery available');
  // // }
// 
// }
// if (!deliveryAvailable){
  // document.write('delivery not Available');
// }

// NESTED LOOP:

// var userPriceBond = [234, 235, 236, 237, 238, 323, 21, 313, 434, 124, 360];
// var priceBondWinner = [112, 152, 190, 201, 220, 236, 238, 250, 285, 310, 315, 320, 341, 360, 355, 380, 400];
// var userWon = [];
// for(i = 0; i < userPriceBond.length; i++){
  // for(j = 0; j < priceBondWinner.length; j++){
  // console.log("i=>",
  // userPriceBond[i],
  // "j=>",
  // priceBondWinner[j],
  // userPriceBond[i] === priceBondWinner[j]
  // );

  //  if(userPriceBond[i] === priceBondWinner[j]) {
    // userWon.push(userPriceBond[i]);
  //  }
  // }
// }
// console.log('price bond nikle hey=>', userWon);

// var student1 = ['Ahmad', 'abdul', 'bilal', 'raza', 'haris', 'shoaib'];
// var student2 = ['hasan', 'tabish', 'usman', 'abdul', 'ahsan', 'bilal',];

// var duplication = [];
// for(i = 0; i < student1.length; i++){
  // for(j = 0; j < student2.length; j++){
    // console.log("i=>",
    // student1[i],
    // "j=>",
    // student2[j],
    // student1[i] === student2[j]
    // );
// 
    // if(student1[i] === student2[j]){
      // duplication.push(student1[i]);
    // }
  // }
// }
// console.log('These names are  in both list=>', duplication);

// let obj = {
  // harry: 90,
  // shubh: 45,
  // shivika: 56,
  // ritika: 57,
  // shiv: 23,
// 
// }
// for (let a in obj){
  // console.log('Marks of ' + a + 'are' + obj[a]);
// }
// while loop:
// let n = prompt('Enter the value of n');
// n = Number.parseInt(n);
// 
// let i = 0;
// while(i<n){
  // console.log(i);
  // i++;
// }

// Do while loop

// let n = prompt('Enter the value of n');
// n = Number.parseInt(n);
// 
// let i = 0;
// do{
  // console.log(i);
  // i++;
// }while(i < n)
  // function onePlusAvg(x, y){
  // console.log("Done");
  // return Math.round(1 + (x + y) /2)
// }

// const sum = (p, q)=>{
  // return p + q
// }

// let a = 1;
// let b = 2;
// let c = 3;

// console.log("One plus Average of a and b is ", onePlusAvg(a, b));
// console.log("One plus Average of b and c is ", onePlusAvg(b, c));
// console.log("One plus Average of a and c is ", onePlusAvg(a, c));

// console.log(sum(9, 7));
// PROBLEM NO 1:
// let marks = {
  // Harry: 90,
  // Lovish: 56,
  // Monika: 4,
  // shub: 9
// }
// for (let i = 0; i<Object.keys(marks).length;i++){
  // console.log("The marks of " + Object.keys(marks)[i] + 'Are' + marks[Object.keys(marks)[i]]);
// }
// problem no 2:
// for (let key in marks){
  // console.log("The marks of " + key + "are" + marks[key]);

// }
// let cn = 43;
// let i 
// while(i !=cn){
  // i = prompt('Enter a number')
  // console.log('Try again')
// 
// }
// console.log('you have enter a correct no');

// const mean = (a, b, c,d) => {
//  return(a+ b+ c+ d) /4
// }
// console.log(mean(4, 5, 6, 7));