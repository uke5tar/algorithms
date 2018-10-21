/*  --- TASK ---

    Compare and update inventory stored in a 2d array against a second 2d array of a fresh delivery.
    Update current inventory item quantity, and if an item cannot be found,
    add the new item and quantity into the inventory array in alphabetical order.
*/

function updateInventory(arr1, arr2) {
    // sort array alphabetically by second column name
    function compareSecondColumn(arr) {
        return arr.sort(function(a, b){
            return a[1] > b[1];
        });
    }
    // loop starts if both arrays !empty
    if(arr1.length > 0 && arr2.length > 0) {
        // loop compares if item from arr2 exist in arr1 and updates if true + removes it from arr2
        for (let i = 0; i < arr2.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                if(arr2[i][1] === arr1[j][1]) {
                    arr1[j][0] += arr2[i][0];
                    arr2.splice(i, 1);
                }
            }
        }
        // concat what is left behind, sort it and return it
        return compareSecondColumn(arr1.concat(arr2));
    } else if (arr1.length === 0) {
        return compareSecondColumn(arr2); // return arr2 sorted if arr1 is empty
    } else {
        return compareSecondColumn(arr1); // return arr1 sorted if arr2 is empty
    }
};

// Example inventory lists

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
