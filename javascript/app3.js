// var student1 = 'ALI';
// var student2 = 'sarfaraz';
// var student3 = 'junaid';

var students = ['ALI','SARFARAZ','JUNAID','ZEESHAN'];

document.write(students[0]+ " IS THE SSC STUDENT.<br>");
document.write(students[1]+ " IS THE HSC STUDENT.<br>");
document.write(students[2]+ " IS THE BCS STUDENT.<br>");
document.write(students[3]+ " IS THE VERY BS STUDENT.<br>");

console.log(students);

// var movie1 = "Avenger Age of ultron";
// var movie2 = "Spectre";
// var movie3 = "Jurassic World";
// var movie4 = "Insideout";

var movies = ['Avenger Age of ultron','Spectre','Jurassic World','Insideout'];

document.write(movies[0]+ " IS THE NO1 MOVIE.<br>");
document.write(movies[1]+ " IS THE NO2 MOVIE.<br>");
document.write(movies[2]+ " IS THE NO3 MOVIE.<br>");
document.write(movies[3]+ " IS THE NO4 MOVIE.<br>");

console.log(movies);

var length = movies.length;
console.log(movies);

var fruits = ["Strawberry","Apple","Orange","Banna"];

document.write(fruits[0]+ " IS THE NO1 Fruit.<br>");
document.write(fruits[1]+ " IS THE NO2 Fruit.<br>");
document.write(fruits[2]+ " IS THE NO3 Fruit.<br>");
document.write(fruits[3]+ " IS THE NO4 Fruit.<br>");

console.log(fruits);

// var car1 = 'Audi';
// var car2 = 'volvo';
// var car3 = 'Ford';
// var car4 = 'Lamborghini'

var cars = ['Audi','Volvo','Ford','Lamborghini'];

document.write(cars[0]+ " IS THE NO1 CAR.<br>");
document.write(cars[1]+ " IS THE NO2 CAR.<br>");
document.write(cars[2]+ " IS THE NO3 CAR.<br>");
document.write(cars[3]+ " IS THE NO4 CAR.<br>");

console.log(cars);

var length = cars.length;
console.log(cars);

// var student1name = 'Michael';
// var student2name = 'John';
// var student3name = 'Tony';

var students = ['Michael','John','Tony'];

document.write(students[0] + " is the marks:320/500 and 64% : <br>  ");
document.write(students[1] + " is the marks:230/500 and 46% :  <br>");
document.write(students[2] + " is the marks:480/500 and 96% : <br> ");

console.log(students);

// var color1 = 'red';
// var color2 = 'blue';
// var color3 = 'green';
// var color4 = 'purple';

var colors = ['RED','BLUE','GREEN','PURPLE'];

console.log(colors[3])

document.write(colors[0] + " is the color:RED.<br>");
document.write(colors[1] + " is the color:BLUE.<br>");
document.write(colors[2] + " is the color:GREEN.<br>");
document.write(colors[3] + " is the color:PURPLE.<br>");

console.log(colors[2]);
colors[2] = 'brown';

colors.unshift('yellow');
console.log("colors after unshift-->",colors);

colors.push('grey');
console.log("colors after push-->",colors);

colors.unshift('navyblue','lemon');
console.log("colors after unshift-->",colors);

colors.shift();
console.log("colors after shift-->",colors);

colors.pop();
console.log("colors after pop-->",colors);

colors.pop();
console.log("colors after pop-->",colors);