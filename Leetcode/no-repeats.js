/**
 * Module to return the number of permutations of a string with no repeating characters, assuming that
 * all characters are unique. Return a number representing the number of non-repeating permutations.
 */

const noRepeats = function(str) {
  let count = 0;
  const strArr = str.split('');
  
  const swap = function(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]; 
  };
  
  const checkNoRepeats = function(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) return false;
    }
    return true;
  };

  const generatePermutations = function(n, arr) {
    if (n === 1) {
      if (checkNoRepeats(arr)) count++;
      return;
    }
    
    for (let i = 0; i < n - 1; i++) {
      generatePermutations(n - 1, arr);
      if (n % 2 === 0) {
        swap(arr, i, n - 1);
      } else {
        swap(arr, 0, n - 1);
      }
    }
    generatePermutations(n - 1, arr);
  };

  generatePermutations(strArr.length, strArr);
  return count;
};

console.log(noRepeats('aab')); // 2
console.log(noRepeats('aaa')); // 0
console.log(noRepeats('abcdefa')); // 3600
console.log(noRepeats('abfdefa')); // 2640
console.log(noRepeats('zzzzzzzz')); // 0

