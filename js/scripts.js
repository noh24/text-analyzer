// Business Logic
function wordCounter(text) {
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(word) {
    if (word.length === 0) {
      return 0;
    } else if (parseFloat(word)) { 
      wordCounter; //can be nothing
    } else {
      wordCount++;  
    }
  });
  return wordCount;
}

function numberOfSameWord(word, text) {
  const textArray = text.split(" ");
  let numberOfOccurences = 0;
  textArray.forEach(function(text) {
    if (word.toUpperCase() === text.toUpperCase()) {
      numberOfOccurences++;
    }
  });
  return numberOfOccurences;
}