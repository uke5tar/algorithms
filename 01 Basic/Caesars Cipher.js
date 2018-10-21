/* --- TASK ---

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/

function rot13(str) { // LBH QVQ VG!
    var strSplit = str.split("");
    var result = [];
    var decode;
    for (var i = 0; i < strSplit.length; i++) {
        if(strSplit[i].match(/\W/)) {
            result.push(strSplit[i]);
        }
        else if(strSplit[i].match(/\w/) && strSplit[i].charCodeAt()-13 >= 65) {
            decode = strSplit[i].charCodeAt() - 13;
            result.push(String.fromCharCode(decode));
        }
        else {
            decode = strSplit[i].charCodeAt() + 13;
            result.push(String.fromCharCode(decode));
        }
    }
    return result.join("");    
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");