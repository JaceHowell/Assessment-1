// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  const number = numbers.filter((numbers) => numbers > 10);
  return number;
  // for (const number of numbers) {
  //   if (number > 10) {
  //     return numbers
  //   }
  // }
}

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  const word = words.filter((words) => words[0] === 'b' || words[0] === 'B');
  return word;
  // const word = words.map((word) => word[0])
  // if (word[0] === 'b' || word[0] === 'B') {
  //   return word;
  // }
}

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
  originalArray = [...originalArray, ...additionalItems]
  return originalArray;
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  return items.filter((items) => items.length === length);
}

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  let newArr = []
  for (let i = 0; i < items.length; i += 2) {
    newArr.push(items[i]);
  }
  return newArr;
  // for (let i = 0; i < items.length; i + 2) {
  //   const array = [items[i]];
  //   console.log(array)
  // }
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  const newArr = [];
  
   words.forEach((word, i) => {
    if (word[0] === letter) newArr.push(i);
}); 
  return newArr;
};
  //The below code would not work because it would ONLY return the values, not the indices.
  // const word = words.filter((words) => words[0] === letter);
  // return word;
findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');


// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  let smallest = items.sort((a, b) => a - b).slice(0, n)
  smallest.reverse()
  return smallest
}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {
  const first = items.indexOf(value)
  if (first === -1) {
    return undefined
  } else {
    return first
  }
}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
  const newArr = []
  for (i = start; i <= stop; i++) {
    newArr.push(i)
  } 
  return newArr
}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
