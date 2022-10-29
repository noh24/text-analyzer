//Utility Logic
//function returns true or false
//is the text empty or not
//arguments object, takes any number of arguments
function isEmpty() {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

// Business Logic
function wordCount(text) {
  let wordCounter = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(word) {
    if (isEmpty(word)) {
      return 0;
    } else if (parseFloat(word)) { 
      wordCounter; //can be nothing
    } else {
      wordCounter++;  
    }
  });
  return wordCounter;
}
// function numberOfSameWord(word, text) {
function occurences(word, text) {
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

//function to pass in text
//change to an array for each item
//loop through array
//first element in the loop is passed through function number ofSameWord function

// elmeent(index) with occurences number array.push()
// [e1, 5]
// wordOccurences = [[hi, 2], [there, 3], [hey, 1]];
// 
// wordOccurences.sort((a, b) => a[1] - b[1]).reverse();
//  
// 
// 
//  if wordOccurences[i][1] > wordOccurences[i++][1] {
//  put higher number first
// }
// });

function sortAndGroupOccurences(text) {
  //split the text into an array
  let textArray = text.split(" ");
  //create an empty array
  let wordOccurences = [];
  //iterate through each word in textArray
  textArray.forEach(function(word) {
    //look through wordOccurences if element[0] = subarray[0] matches the word,
    if (wordOccurences.find(element => element[0] === word)) {
      //if so return out of the forEach loop iteration
      return;
    }
    // if not, push the array of word and occurences() into word occurence
    wordOccurences.push([word, occurences(word, text)]);
  });
  // sort through all elements, compares previousValue to currentValue, 
  return wordOccurences.sort((a, b) => b[1] - a[1]);
  //if value is >0, a sort after b,
  //if value is <0, a sort before b,
  //if value is ===, stay the same
}
//[[hi, 2], ]
function presentSortedArray(array) {
  let arraySortedWordOccurences = [];
  array.forEach((element) => {
    arraySortedWordOccurences.push(element[0].concat( ": " + element[1]));
  });
}
//function returns number of each words
//make an array of text
//filter out duplicate words
//call on a function to count number of same words


// function omitWord1(word, text) {
//   let textArray = text.split(" ");
//   let newArray = [];
//   const badWordArray = word.split(" ");

//   badWordArray.forEach(function(element) {
//     if (textArray.includes(element)) {
//       let index = textArray.indexOf(element);
//       textArray.splice(index, 1);
//     }
//     return textArray;
//   }); 
//   textArray.join(" ");
//   return textArray;
// }

// function omitWord2(word, text) {
//   let textArray = text.split(" ");
//   let newArray = [];
//   const badWordArray = word.split(" ");

//   textArray.forEach(function(element) {
//     if (badWordArray.includes(element)) {
//       let index = textArray.indexOf(element);
//       textArray.splice(index, 1);
//     } else {
//       newArray.push(element);
//     }
//     return textArray;
//   });
//   newArray.join(" ");
//   return newArray;
// }
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
  if (isEmpty(word, text)) {
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
  const numberOfWords = wordCount(passage);
  const occurrencesOfWord = occurences(word, passage);
  const arrayOfSortedWordsAndOccurences = sortAndGroupOccurences(passage);
  const presentArray = presentSortedArray(arrayOfSortedWordsAndOccurences);
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null; 
  }
  
  document.getElementById("total-count").innerText = numberOfWords;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  document.getElementById("sorted-occurences").innerText = presentArray;
  
  //each element in array of wordOccurneces
  //add element[0][0] + ": " + element[0][1] in variable
  //display it
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});