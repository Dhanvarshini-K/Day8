//  Write a function to flatten an array of arrays. The resulting array should contain all the values of the input array, without nesting.
// flatten([1, [2, [3, [4, [5, 6]]]]])
// Output => [1, 2, 3, 4, 5, 6]
// Avoid using Array.flatten or any other utility function that will help with flattening the array directly. You can use map, filter or reduce or for loops

// function getFlattenArray(arr) {
//   return arr.toString().split(',').map(Number);
// }

function getflattenNestedList(nestedList) {
  
  if(isNaN(nestedList) !== "number"){
    return "Invalid";
  }
  const flattened = [];
  for (const item of nestedList) {
    if (Array.isArray(item)) {
      flattened.push(...getflattenNestedList(item));
    } else {
      flattened.push(item);
    }
  }
  return flattened;
}
console.log(getflattenNestedList([1, [2, [3, [4, [5, 6]]]]]));








