/* --- TASK ---

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

*/


// Solution with least amount of lines of code
function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
        if(i+1 < str.length && str.charCodeAt(i+1) - str.charCodeAt(i) !== 1) {
            return String.fromCharCode(str.charCodeAt(i)+1);
        }
    }
    return undefined;
}

fearNotLetter("abce");


// Similar solution but with an array
function fearNotLetter(str) {
    var strToArr = str.toLowerCase().split("");
    for (var i = 1; i < strToArr.length; i++) {
        if(strToArr[i+1] !== undefined && strToArr[i+1].charCodeAt(0) - strToArr[i].charCodeAt(0) !== 1) {
            return String.fromCharCode(strToArr[i].charCodeAt(0) + 1);
        }
    }
    return undefined;
}

fearNotLetter("abce");
