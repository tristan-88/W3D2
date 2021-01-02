/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(array) {
  let emptyArr = []

  array.forEach(
    function (variables) {
      if (Array.isArray(variables)) {
        emptyArr.push(...flatten(variables))
      } else { emptyArr.push(variables) }
    })
  return emptyArr
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
