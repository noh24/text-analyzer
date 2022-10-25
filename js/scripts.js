// Business Logic

function wordCounter(text) {
  let wordCount = 0;
  const textArray = text.split(" ");
  console.log(textArray);
  textArray.forEach(function(word) {
    if (word.length === 0) {
      return 0;
    } else {
      wordCount++;  
    }
  });
  return wordCount;
}