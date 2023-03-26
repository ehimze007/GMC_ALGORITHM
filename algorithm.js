let charLength; //The total number of characters, space included.
let vowelNum; //The total number of vowels in the sentence.
let wordsNum; //The total number of words separated by space.
let sentence; //The sentence to be read


START
charLength = 0;
vowelNum = 0;
wordsNum = 0;
// Loop through the sentence variable which contains all the characters to be read 
FOR (each character in sentence) {
    charLength += 1; //determine the number of characters, space included
    IF(character === EITHER A,E,I,O,U){
    /*determine number of vowels*/
    vowelNum += 1;
    }
    IF(character === " " or ","){
    /*determine number of words*/
    wordsNum += 1;
    }
}
END_FOR-LOOP

PRINT charLength;
PRINT vowelNum;
PRINT wordsNum; 


