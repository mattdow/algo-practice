/**
 * @param {number[]} numArray
 * @param {number} val
 * @return {number}
 */
const removeElement = function(numArray, val) {
  numArray = numArray.filter((num) => num != val);
  console.log(numArray);
  return numArray.length;
};

console.log(removeElement([3,2,2,3], 3)); // 2
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // 5