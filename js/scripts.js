//Utility Logic
function isEmpty(text) {
  return (text.trim().length === 0);
}

// Business Logic
function wordCounter(text) {
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(word) {
    if (isEmpty(word)) {
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
    if (isEmpty(text)) {
      return 0;
    } else if (text.toUpperCase().includes(word.toUpperCase())) {
      numberOfOccurences++;
    }
  });
  return numberOfOccurences;
}

function uniqueWord(text) {
  text.filter(function(word, index) {

  });
}

function omitWord(word, text) {
  let textArray = text.split(" ");
  let newArray = [];
  const badWordArray = word.split(" ");

  badWordArray.forEach(function(element) {
    if (textArray.includes(element)) {
      let index = textArray.indexOf(element);
      textArray.splice(index, 1);
    }
    return textArray;
  }); 
  textArray.join(" ");
  console.log(textArray);
}
function omitWord(word, text) {
  let textArray = text.split(" ");
  let newArray = [];
  const badWordArray = word.split(" ");

  textArray.forEach(function(element) {
    if (badWordArray.includes(element)) {
      let index = textArray.indexOf(element);
      textArray.splice(index, 1);
      console.log(textArray);
    }
    console.log("hi", textArray);
    return textArray;
  });
  textArray.join(" ");
  console.log("new",textArray);
}
// function omitPunctuation(text) {
//   const punctuation = [",", ".", "!", "?"];
//   let newWord = text.split("");
//   punctuation.forEach(function(punct) {
//     if (newWord.includes(punct)) {
//       newWord.pop();
//     } else if (newWord.includes("'")) {
//       newWord.pop();
//       newWord.shift();
//     }
//   });

//   return newWord.join("");
// }

// function omitBleep(badWord, textPassage) {
//   let textPassageArray = textPassage.split(" ");
//   let newArray =[];
  

//   textPassageArray.forEach(function(text) {
//     //"muppeteer".includes("muppeteer,")
//     if (badWord.includes(omitPunctuation(text))) {
//       //do nothing
//     } else {
//       newArray.push(omitPunctuation(text))
//     }
//   });

//   return newArray.join(" ");
// }

// UI Logic
function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(text, index) {
    if (word === text) {
      const bold = document.createElement("strong");
      bold.append(text);
      p.append(bold);
    } else {
      p.append(text);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ")
    }
  });
  return p; 
}

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfSameWord(word, passage);
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null; 
  }
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});