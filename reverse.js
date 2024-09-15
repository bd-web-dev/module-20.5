// An array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7];
// reversedArray = [7, 6, 5, 4, 3, 2, 1];
console.log("Before invoking reverse method: ");
console.log(numbers);
// reverse() mutates original array
numbers.reverse();
console.log("After invoking reverse method: ");
console.log(numbers);

numbers = [1, 2, 3, 4, 5, 6, 7];
// Using push does not reverse array when looped incrementally
// Makes an exact copy
let reverseNumbers = [];
for (const num of numbers) {
  //   console.log(num);
  reverseNumbers.push(num);
}
console.log("Using for-of loop and push is wrong:");
console.log(reverseNumbers);

// Reverse an array using for-of loop
reverseNumbers = [];
for (const num of numbers) {
  reverseNumbers.unshift(num);
}
console.log("Using for-of loop and unshift:");
console.log(reverseNumbers);

// Using incremental for loop
reverseNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  reverseNumbers.unshift(num);
}
console.log("Using incremental basic for loop and unshift:");
console.log(reverseNumbers);

// Using decremental for loop
reverseNumbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  const num = numbers[i];
  reverseNumbers.push(num);
}
console.log("Using decremental basic for loop and push:");
console.log(reverseNumbers);
