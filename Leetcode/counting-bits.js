// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Example 1:
// Input: n = 2
// Output: [0,1,1]

/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
  let result = Array(n+1).fill(0);
  if (n === 0) {
    return result;
  }
  result[1] = 1;
  for(let i = 2; i <= n; i++) {
    if (i % 2 === 0) {      
      result[i] = result[Math.floor(i / 2)];
    } else {
    result[i] = result[Math.floor(i / 2)] + 1;
    }
  }
  return result;
};


