/* --- TASK ---

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

*/

function titleCase(str) {
    str = str.toLowerCase();
    var strSplit = str.split(" ");
    var firstLetter = [];
    var result = [];
    for (var i = 0; i < strSplit.length; i++) {
        firstLetter.push(strSplit[i][0].toUpperCase() + strSplit[i]);
        result.push(firstLetter[i].slice(0,1) + firstLetter[i].slice(2));
    }
    firstLetter = [];
    return result.join(" ");
  
}

titleCase("I'm a little tea pot");