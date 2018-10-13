/* --- TASK ---

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
    var groups = [];
    for (var i = 0; i < arr.length;) {
        groups.push(arr.slice(i, i + size));
        i += size;
    }
    return groups; 
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);