## Test Driven Development 
```
Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordcounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("                    ");
Expected Result: 0

Test: "It should not count numbers as word."
Code: wordCounter("hi there 7 7 7");
Expected Result: 2;
```
```
Describe numberOfSameWord()

Test1: "How many times does a word occur in a text of an empty string."
Code: 
  const text = "";
  const word = "red";
  numberOfSameWord(word, text);
Expected Results: 0;

Test2: "Check to see if word matches text using 1 word."
Code:
  const text = "red";
  const word = "red";
  numberOfSameWord(word, text);
Expected results: 1;

Test3: "compare text and word that doesn't match, return 0"
Code: 
  const text = "red";
  const word = "blue";
  numberOfSameWord(word, text);
Exected results: 0;

Test4: "Should return the number of occurences of a word"
Code:
  const text = "red green blue purple red red red";
  const word = "red";
  numberOfSameWords(word, text);
Expected results: 4;
```
