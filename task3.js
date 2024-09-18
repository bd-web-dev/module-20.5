// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

// Without for-of loop
let numbers = ["Tom", "Tim", "Tin", "Tik"];
let numbersStr = numbers.join("");
console.log(numbersStr);

let finalStr = "";
// With for-of loop
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  finalStr = finalStr.concat("", number);
}

console.log(finalStr);
