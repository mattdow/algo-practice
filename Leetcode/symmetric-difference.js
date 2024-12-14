// Write a function to find the symmetric difference of two arrays.
// The symmetric difference is the set of elements that are in either of the arrays, but not in both.

const symmetricDifference = (arr1, arr2) => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const diff = new Set([...arr1.filter(x => !set2.has(x)), ...arr2.filter(x => !set1.has(x))]);
  return [...diff];
}


// now we can use the above function to find the symmetric difference of multiple arrays
const symmetricDifferenceMultiple = (...args) => {
  return args.reduce((acc, val) => symmetricDifference(acc, val));
}

// Test cases
console.log(symmetricDifferenceMultiple([1, 2, 3], [2, 3, 4], [3, 4, 5])); // [1, 5]
console.log(symmetricDifferenceMultiple([1, 2, 3], [1, 2, 3], [4, 5, 6])); // [4, 5, 6]
console.log(symmetricDifferenceMultiple([1, 2, 3], [4, 5, 6], [7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(symmetricDifferenceMultiple([1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6])); // [1, 6]