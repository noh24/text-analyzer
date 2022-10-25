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