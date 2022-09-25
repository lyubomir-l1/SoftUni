function reverseString(word, char, newWord){
  let correct = word.replace("_", char);
  let output = newWord === correct ? console.log("Matched") : console.log("Not Matched");
}
reverseString(  'Str_ng', 'i',

'String');