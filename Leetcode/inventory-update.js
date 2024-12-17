/** This function will compare the inventory array with a new delivery array and update the inventory array with the new delivery array. If the item is already in the inventory, it will update the quantity. If the item is not in the inventory, it will add the item to the inventory.
Example 1:
Input: inventory = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], delivery = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]] 
Output: [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
**/

const getProductList = (inv) => inv.map(item => item[1]);

const getInventoryIndex = (arr, product) => arr.indexOf(product);

const updateInventory = (arr1, arr2) => {
  let newInventory = [...arr1];
  arr2.forEach((item) => {
      console.log(item);
      const productList = getProductList(newInventory);
      console.log(productList.includes(item[1]))
      if (productList.includes(item[1])) {
          const index = getInventoryIndex(productList, item[1]);
          console.log(index)
          newInventory[index][0] += item[0];
      } else {
          newInventory.push(item);
      }
  })
  return newInventory.sort((a, b) => {
      let nameA = a[1].toUpperCase();
      let nameB = b[1].toUpperCase();
      if (nameA < nameB) {
          return -1
      } else return 1;
  });
}


// Example inventory lists
const curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

const newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));