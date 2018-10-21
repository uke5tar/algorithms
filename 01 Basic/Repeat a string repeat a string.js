/* --- TASK ---

Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

*/

function repeatStringNumTimes(str, num) {
  // repeat after me
  return num > 0 ? str.repeat(num) : "";
}

repeatStringNumTimes("*", 3);