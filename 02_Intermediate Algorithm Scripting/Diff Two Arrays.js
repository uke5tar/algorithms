/* --- TASK ---

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

*/

// Solution 1
function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    var i = 0;
    var j = 0;
    while (i < arr1.length) {
        if(arr2.indexOf(arr1[i]) == -1) {
            newArr.push(arr1[i]);
        }
        i++;
    }
    while (j < arr2.length) {
        if(arr1.indexOf(arr2[j]) == -1) {
            newArr.push(arr2[j]);
        }
        j++;
    }
    return newArr;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);


// Solution 2
function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    var filteredArr = arr1.concat(arr2).filter(function(elem) {
        
        if(arr1.indexOf(elem) == -1) {
            newArr.push(elem);
        }
        
        if(arr2.indexOf(elem) == -1) {
            newArr.push(elem);
        }
    });
    
    return newArr;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);


// Solution 3
function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(function(elem) {
        return arr1.indexOf(elem) == -1 || arr2.indexOf(elem) == -1; 
    });
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);


// shorthand for Solution 3
function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(elem => arr1.indexOf(elem) == -1 || arr2.indexOf(elem) == -1);
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);