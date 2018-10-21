/* --- TASK ---

Flatten a nested array. You must account for varying levels of nesting.

*/

function steamrollArray(arr) {
    // I'm a steamroller, baby
    // reduces array to one value by comparing one another with a function. first arg is function, second is an empty array
    return arr.reduce(function (a, b) {
        // if b is array call the func again otherwise join it with a
        return a.concat(Array.isArray(b) ? steamrollArray(b) : b);
    }, []);
}

steamrollArray([1, [2], [3, [[4]]]]);

