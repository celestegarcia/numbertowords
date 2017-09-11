var converter = require('number-to-words');
converter.toOrdinal(21); // => “21st” 

console.log("toOrdinal ="+converter.toOrdinal(21));

var converter = require('number-to-words');
converter.toWords(13); // => “thirteen” 
 
// Decimal numbers: 
converter.toWords(2.9); // => “two” 
 
// Negative numbers: 
converter.toWords(-3); // => “minus three” 
 
// Large numbers: 
converter.toWords(9007199254740992); // => “nine quadrillion, seven trillion, one hundred ninety-nine billion, two hundred fifty-four million, seven hundred forty thousand, nine hundred ninety-two” 
console.log("toWords ="+converter.toWords(9007199254740992));

var converter = require('number-to-words');
converter.toWordsOrdinal(21); // => “twenty-first” 

console.log("toWordsOrdinal ="+converter.toWordsOrdinal(21));