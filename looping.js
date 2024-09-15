// Looping techniques
// 1. For loop
// 2. While loop
// 3. do-while loop
// 4. for in loop -> objects
// 5. for of loop -> arrays

const friends = ["Elon", "Bill", "Mark", "Warren"];
// Using for-of loop
console.log("Using for-of loop");
for (const friend of friends) {
  console.log(friend);
}

console.log("Using basic for loop with fixed iterationCount of 10");
// Index i from 4 onwards log a value of undefined
// when using friends[i]
for (let i = 0; i < 10; i++) {
  // Array index
  console.log(i);
  // Element at array index
  console.log(friends[i]);
}

// Using basic for loop with arrayName.length
console.log("Using basic for loop with .length");
for (let i = 0; i < friends.length; i++) {
  // Array index
  console.log(i);
  // Element at array index
  console.log(friends[i]);
}

// Looping through array of numbers using for loop
console.log("For loop iterating array of numbers");
const numbers = [12, 23, 34, 45, 56, 67, 78, 89, 90];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Looping through array of strings using while loop
console.log("While loop iterating array of strings");
let i = 0;
while (i < friends.length) {
  console.log(friends[i]);
  i++;
}

// Looping through array of numbers using while loop
console.log("While loop iterating array of numbers");
let n = 0;
while (n < numbers.length) {
  console.log(numbers[n]);
  n++;
}
