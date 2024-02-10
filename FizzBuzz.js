"use strict";

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
  // declared the fizzBuzz function and passed n as a parameter

  for (let i = 1; i <= n; i++) {
    // I used a for loop to iterate through the numbers from 1 to n
    if (i % 3 == 0 && i % 5 == 0) {
      // I used the modulo operator to check if the number is a multiple of 3 and 5
      console.log("FizzBuzz"); // If the number is a multiple of 3 and 5, I printed FizzBuzz
    } else if (i % 3 == 0 && i % 5 != 0) {
      // If the number is a multiple of 3 but not 5, I printed Fizz
      console.log("Fizz");
    } else if (i % 5 == 0 && i % 3 != 0) {
      // If the number is a multiple of 5 but not 3, I printed Buzz
      console.log("Buzz");
    } else {
      console.log(i); // If the number is not a multiple of 3 or 5, I printed the value of i
    }
  }
}

fizzBuzz(15); // I insert 15 for n here
