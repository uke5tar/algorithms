/* --- TASK ---

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
    var filter = arr.filter(function(arg) {
        return Boolean(arg);
    });
    return filter;
}

bouncer([7, "ate", "", false, 9]);