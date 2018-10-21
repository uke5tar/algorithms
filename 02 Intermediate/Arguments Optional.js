/* --- TASK ---

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/

function addTogether() {
    // store function arguments in new Array args
    var args = Array.from(arguments);
    // passes if all values in args are valid numbers
    if(args.every(value => typeof value === "number")) {
        if(args.length > 1) { // if minimum of two arguments
            return args.reduce((a,b) => a + b); // returns sum of values in arg (arguments)
        } else {
            // closure that adds the result of the first function call to a new function call with another single argument
            return function(x) {
                // checks if x is a valid number and parses it to one if its a coercable string
                return typeof x === "number" ? parseInt(args) + parseInt(x) : undefined;
            };
        }
    } else {
        return undefined; // if one or more arguments are not valid numbers
    }
}

addTogether(2)(3);