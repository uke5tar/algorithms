/* --- TASK ---

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

*/


// ES6 with arrow function
function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(item => !item[pre] ? false : true);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// Solution with every
function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(function(item) {
        return !item[pre] ? false : true;
    });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// Solution with for loop
function truthCheck(collection, pre) {
    // Is everyone being true?
    for (let i = 0; i < collection.length; i++) {
        if(!collection[i][pre]) {
            return false;
        }
    }
    return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");