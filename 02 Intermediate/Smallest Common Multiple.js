/* --- TASK ---

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

*/

function smallestCommons(arr) {
    
    // minimum value in array
    var min = Math.min(...arr);
    // maximum value in array
    var max = Math.max(...arr);
    // fills new range array with values from min to max of the given array
    var range = [];
    for(let i = min; i <= max; i++) {
        range.push(i);
    }
    
    // while loop checks for each value in range (i) if the value is divisible by an incrementing number (smallestCommon) starting from two times max
    var counter = 0; // counts the values in range
    var smallestCommon = max*2; // starts at two times max because it can be for sure not below that
    while(counter < range.length) {
        // loop counts from the highest numbers in array down to the lowest because these will be harder to match and therefore save performance
        for (let i = range.length; i >= 0; i--) {
            // if result of modulo calc is equal to 0 the tested smallest common is a multiple of the value
            if((smallestCommon/range[i]) % 1 === 0) {
                counter++; // increment counter to check later if all values in range are divisible by the tested smallestCommon
            }
        }
        // evalues true if the tested smallest common is a multiple of ALL values in range
        if(counter === range.length) {
            break; // breaks out of loop (we could already return the smallest common here but due to code cleaniness the return will be outside of the loop)
        } else {
            smallestCommon+=max; // increments the tested smallest common by the value of max
            counter = 0; // reset counter
        }
    }
    return smallestCommon; // returns the smallest common multiple of all values in range
}

smallestCommons([1, 5]);