var languageArray = ['html', 'css', 'javascript', 'react', 'node.js'];

// confirm array length of 5
console.log(languageArray.length);

console.log('the length of the language array is : ' + languageArray.length);

// @Tim why doesn't this work? Shouldn't this push two items into the array?
// languageArray.push('php', 'C#');

var newArray = ['C#', 'php'];
languageArray = languageArray.concat(newArray);
console.log(languageArray);

// remove the last element from an array.//
var removedElement = languageArray.pop();
console.log('removed the last element of the array', removedElement);

// element added to the begining of the array.
languageArray.unshift('C++');
console.log('element added to the beginning of the array.', languageArray);

var thirdElement = languageArray[2];
console.log('The third element in the array is: ', thirdElement);

var arrayLength = languageArray.length;
console.log('The array length is: ', arrayLength);

var lastItem = languageArray[arrayLength - 1];
console.log('The last item in the array is: ', lastItem);
