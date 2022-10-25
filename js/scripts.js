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
    if (text.toUpperCase().includes(word.toUpperCase())) {
      numberOfOccurences++;
    }
  });
  return numberOfOccurences;
}


function omitPunctuation(text) {
  const punctuation = [",", ".", "!", "?"];
  let newWord = text.split("");
  punctuation.forEach(function(punct) {
    if (newWord.includes(punct)) {
      newWord.pop();
    } else if (newWord.includes("'")) {
      newWord.pop();
      newWord.shift();
    }
  });

  return newWord.join("");
}

function omitBleep(badWord, textPassage) {
  let textPassageArray = textPassage.split(" ");
  let newArray =[];
  

  textPassageArray.forEach(function(text) {
    //"muppeteer".includes("muppeteer,")
    if (badWord.includes(omitPunctuation(text))) {
      //do nothing
    } else {
      newArray.push(omitPunctuation(text))
    }
  });

  return newArray.join(" ");
}