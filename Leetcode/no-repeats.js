/**
 * Module to return the number of permutations of a string with no repeating characters, assuming that
 * all characters are unique. Return a number representing the number of non-repeating permutations.
 */

const noRepeats = function(str) {
  const strArr = str.split('');
  let permutations = [];
  let count = 0;

  const swap = function(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  };

  const generatePermutations = function(n, arr) {
    if (n === 1) {
      permutations.push(arr.join(''));
    } else {
      for (let i = 0; i < n - 1; i++) {
        generatePermutations(n - 1, arr);
        if (n % 2 === 0) {
          swap(arr, i, n - 1);
        } else {
          swap(arr, 0, n - 1);
        }
      }
      generatePermutations(n - 1, arr);
    }
  };

  generatePermutations(strArr.length, strArr);
  for (let i = 0; i < permutations.length; i++) {
    let current = permutations[i];
    let repeat = false;
    for (let j = 0; j < current.length - 1; j++) {
      if (current[j] === current[j + 1]) {
        repeat = true;
      }
    }
    if (!repeat) {
      count++;
    }
  }
  return count;
}

console.log(noRepeats('aab')); // 2
console.log(noRepeats('aaa')); // 0
console.log(noRepeats('abcdefa')); // 3600
console.log(noRepeats('abfdefa')); // 2640
console.log(noRepeats('zzzzzzzz')); // 0

