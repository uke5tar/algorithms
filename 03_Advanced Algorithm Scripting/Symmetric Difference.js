/* --- TASK ---

Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

*/

function sym(args) {
    
    var sum = [], // store delta of two arrays (will be provided as arr1)
        argsArr = Array.from(arguments); // convert arguments into array
    
    // find all duplicates in Array and remove all but one
    function removeSingleDuplicates(array) {
        return array.filter((item, pos) => array.indexOf(item) === pos);
    }
    
    // find all duplicates in array and remove all of them
    function removeBothDuplicates(array) {
        return array.sort().filter((item, i, arr) => item !== arr[i-1] && item !== arr[i+1]);
    }
    
    function getUniques(arr1, arr2) {
        arr1 = removeSingleDuplicates(arr1); // clean first array from duplicates
        arr2 = removeSingleDuplicates(arr2); // clean second array from duplicates
        sum = arr1.concat(arr2); // merge both arrays
        sum = removeBothDuplicates(sum); // remove all values from merged array that are duplicates including the original value
    }
    
    // apply function as many times as arrays are provided as arguments
    for (let i = 0; i < argsArr.length; i++) {
        getUniques(sum, argsArr[i]);    
    }
    
    return sum; // return result
}

sym([1, 2, 3], [5, 2, 1, 4]);