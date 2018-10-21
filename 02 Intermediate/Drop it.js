/* --- TASK ---

Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

*/

function dropElements(arr, func) {
    // incrementing variable not needed because all elem that don't pass reduce lengths of arr via shift until it either passes and gets returned or is at 0 and returns false
    var i = 0;
    while(i < arr.length) {
        // if value in argument arr doesnt pass func test it will be removed from arr
        if(!func(arr[i])) {
            arr.shift();
        }
        else {
            break; // breaks out of loop if something passes
        }
    }
    return arr; // returns arr with values that are left
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;});