/* --- TASK ---

Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.

*/

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  	arr.splice(0, howMany);
  	return arr.slice();
}

slasher([1, 2, 3], 2);