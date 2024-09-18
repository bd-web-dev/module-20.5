// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

const statement = "I am a hard working person";
let statementArray = statement.split(" ");

let statementArrayReversed = [];
for (let i = 0; i < statementArray.length; i++) {
  let word = statementArray[i];
  statementArrayReversed.unshift(word);
}

let statementReversed = statementArrayReversed.join(" ");
console.log(statementReversed);
