'use strict';

/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */


// If i is a multiple of both 3 and 5, print FizzBuzz
// If i is a multiple of 5 (but not 3), print Buzz
// If i is a multiple of 3 (but not 5), print Fizz
// If i is not a multiple of 3 or 5, print the value of i




// This following Code is my solution

function fizzBuzz(n) {
    for(let i = 1; i <= n; i++){
        if((i % 3) == 0 && (i % 5) == 0){
            console.log("FizzBuzz")
        }
        else if((i % 3) == 0 && (i % 5) != 0){
            console.log("Fizz")
        }
        else if ((i % 5) == 0 && (i % 3) != 0){
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    };

}


fizzBuzz(15); // I insert 15 for n here