/* --- TASK ---

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

*/

function findElement(arr, func) {
    // check whole array against func and store all values that pass into res
    var res = arr.filter(func);
    return res[0]; // return first
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });