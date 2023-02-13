let input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (const letter of input) {
  // console.log(vowel);
  if (letter === 'e') {
    resultArray.push(letter);
  }
   if (letter === 'u') {
    resultArray.push(letter);
  }
  for (const vowel of vowels) {
    if (letter == vowel) {
      resultArray.push(letter);
    }
  }
}

console.log(resultArray);

let resultString = resultArray.join('').toUpperCase();
console.log(resultString);
