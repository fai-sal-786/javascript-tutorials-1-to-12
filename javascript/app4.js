
//question:1) write a loop a print numbers from 1 to 10?
// for(i = 1; i<= 10; i++){
    // console.log(i);
// }
// answer: loop print 1 to 10.

// question:2)write a loop to print even numbers from 1 to 20?
//    for(i = 1; i<=10; i++){
        // if(i % 2 == 0)
    // console.log(i);
//    }
// answer: loop print  1 to 20.

// question:3) write a loop to print odd number from 1 to 15?
// for(i = 1; i<=15; i++){
    // if(i % 2 == 1)
// console.log(i);
// }
// answer: loop print 1 to 15.


// question:5) write a loop to print the multiplication table of a number (let say 7) upto 10.

// for (i= 1; i<=10; i++){
    // console.log(i * 7  );
// }

// for (i= 1; i<=10; i++){
    // console.log(i * 8  );
// }
// 
// for (i= 1; i<=10; i++){
    // console.log(i * 9  );
// }
// 
// for (i= 1; i<=10; i++){
    // console.log(i * 10  );
// }

// question:7)write a loop to find and print the sum of digits of a number(let say 123?

//  for( i = 1; i<4; i++){
    // console.log(i)
//  }

// question:8)write a loop to print the reverse of a string (let say "hello")?

// for(i = 1; i<=10; i++){
    // console.log('hello'+ i)
// }

// question:9)write a loop to print the  square of numbers 1 to 10?

// for (i = 1; i <=10; i++){
    // console.log( i * i );
// }

//question:4) write a loop to calculate and print the factorial of a number (let say 5)?

// 1*2*3*4*5 = 120;

// question:10) write a loop to find and print the largest element in an array(let,s say [3,7,2,9,5]).

// var foods = ['apple', 'banana','strawbery','chico','Amrode','maltai','orange','pineapple','cherry','kiwi']
var num = [3,7,2,9,5]
var largest = num[0]
 for(i = 1; i < 5; i++){
    if(num[i]>largest){
        largest = num[i]
    }
}
document.write(largest+" is the largest in the given array.")



// question:6) write a loop to print the fibonacci series up to the 10th term?

// var num = +prompt('Enter the number of term: ');{
    // console.log(num + 'Fibonacci series');
// }
