/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let single = 0;
  for (let num of nums) {
    single = single ^ num;
  }
  return single;
};

console.log(singleNumber([2,2,1])); // 1
console.log(singleNumber([4,1,2,1,2])); // 4
console.log(singleNumber([1])); // 1
console.log(singleNumber([1,2,2])); // 1