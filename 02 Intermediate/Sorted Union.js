/* --- TASK ---

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

*/

// first solution using a nested loop
function uniteUnique(arr) {
    var sumArr = [];
    for (var i = 0; i < arguments.length; i++) {
        var argArr = arguments[i];
        for (var k = 0; k < argArr.length; k++) {
            if(!sumArr.includes(argArr[k])) {
                sumArr.push(argArr[k]);
            }    
        }
    }
    return sumArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


// second solution using reduce
function uniteUnique(arr) {
    var sumArr = [];
    for (var i = 0; i < arguments.length; i++) {
        sumArr = sumArr.concat(arguments[i]);
    }
    
    var uniqArr = sumArr.reduce(function(a, b) {
        if (a.indexOf(b) < 0) {
            a.push(b);
        }
        return a;
    },[]);
    
    return uniqArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);



