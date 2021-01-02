/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/
function isSorted(arr) {

  console.log(arr.length)
  if (arr[0] < arr[1] && arr[1] < arr[2]) return true

  if (arr.length === 0) return false

  if (arr[0] < arr[1] && arr[1] > arr[2]) return false

  isSorted(arr.slice(1))

}
console.log(isSorted([1, 2, 3, 4, 5]))
console.log(isSorted([1, 2, 4, 3, 5]))

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
