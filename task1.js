// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

const colors = ["red", "blue", "green", "yellow", "orange"];
let colorsReversed = [];

for (let color of colors) {
  colorsReversed.unshift(color);
}
console.log(colorsReversed);

colorsReversed = [];
for (let i = 0; i < colors.length; i++) {
  let color = colors[i];
  colorsReversed.unshift(color);
}

console.log(colorsReversed);

colorsReversed = [];
for (let i = colors.length - 1; i >= 0; i--) {
  let color = colors[i];
  colorsReversed.push(color);
}

console.log(colorsReversed);
