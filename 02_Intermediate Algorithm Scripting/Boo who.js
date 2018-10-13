/* --- TASK ---

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

*/

// 1st solution
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
    return bool === true || bool === false;
}

booWho(null);


// 2nd solution
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
    return typeof bool === "boolean";
}

booWho(null);
