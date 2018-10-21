/* --- TASK ---

Return the length of the longest word in the provided sentence.

Your response should be a number.

*/

function findLongestWord(str) {
  	var longestWord = [];
    var strSplit = str.split(" ");
    for (var i = 0; i < strSplit.length; i++) {
        longestWord.push(strSplit[i].length);
    }
    longestWord.sort(function(a, b) {
        return b - a;
    });
    return longestWord[0];
    
}

findLongestWord("The quick brown fox jumped over the lazy dog");