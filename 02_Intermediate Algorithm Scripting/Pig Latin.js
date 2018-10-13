/* --- TASK ---

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

*/

// second solution
function translatePigLatin(str) {
    var regex = /[aeiou]/i;
    return str.charAt(0).match(regex) ? str + "way" : str.substring(str.search(regex)) + str.substring(0, str.search(regex)) + "ay";
}

translatePigLatin("consonant");


// first solution
function translatePigLatin(str) {
    if(str.charAt(0).match(/[aeiou]/i)) {
        return str + "way";
    } else {
        var vowels = ["a", "e", "i", "o", "u"];
        var strToArr = str.split("");
        var firstConArr = [];
        for (var i = 0; i < strToArr.length; i++) {
            if(strToArr.indexOf(vowels[i]) != -1) {
                firstConArr.push(strToArr.indexOf(vowels[i]));
            }
        }

        firstConArr.sort(function(a,b) {
            return a - b; 
        });

        return str.substring(firstConArr[0]) + str.substring(0, firstConArr[0]) + "ay";
    }
}

translatePigLatin("consonant");
