const persons = ["Rakib", "Nokib", "Sakib", "Akib", "Dakib", "Anis", "anis"];
// Mutates original array
// Sort means to arrange
// Can sort in ascending or descending order
// Sorts strings based on ASCII codes
// Uppercase letters come before lowercase letters
// If 2 strings have same starting character,
// then 2nd character of both are compared for sorting
const sortedPersons = persons.sort();
console.log("Sorted string array: ", sortedPersons);

let numbers = [4, 7, 2, 8, 3, 6];
// Ascending: smaller to larger
// Final Array: [2, 3, 4, 6, 7, 8]
// Descending: larger to smaller
// Final Array: [8, 7, 6, 4, 3, 2]
let numbersAscending = numbers.sort();
console.log("Sorted numbers array (Ascending): ", numbersAscending);

numbers = [4, 7, 12, 8, 43, 6, 1];
// These numbers are also treated as strings and their associated ASCII codes
// when JS sorts the numbers
numbersAscending = numbers.sort();
console.log(
  "Sorted numbers array (Ascending). Does not work: ",
  numbersAscending
);
// Following works
numbersAscending = numbers.sort(function (a, b) {
  return a - b;
});
console.log("Sorted numbers array (Ascending). This works: ", numbersAscending);

let numbersDescending = numbers.sort(function (a, b) {
  return b - a;
});
console.log(
  "Sorted numbers array (Descending). This works: ",
  numbersDescending
);
