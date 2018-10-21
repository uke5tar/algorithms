/* --- TASK ---

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

*/

// 1st solution
function convertHTML(str) {
  // &colon;&rpar;
    var regex = /[&<>\'\"]/g;
    var strMatch = str.match(regex);
    if(strMatch !== null) {
        for (var i = 0; i < strMatch.length; i++) {
            switch(strMatch[i]) {
            case "&":
                str = str.replace(strMatch[i], "&amp;");
                break;
            case "<":
                str = str.replace(strMatch[i], "&lt;");
                break;
            case ">":
                str = str.replace(strMatch[i], "&gt;");
                break;
            case '"':
                str = str.replace(strMatch[i], "&quot;");
                break;
            case "'":
                str = str.replace(strMatch[i], "&apos;");
                break;
            }    
        }    
    }
    
    return str;
}

convertHTML("Dolce & Gabbana");


// 2nd solution
function convertHTML(str) {
  // &colon;&rpar;
    var regex = /[&<>'"]/g;
    var charObj = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
        
    return str.replace(regex, function(char) {
        return charObj[char];
    });
}

convertHTML("Dolce & Gabbana");



// forum solution
function convertHTML(str) {
  // &colon;&rpar;
    var regex = /[&<>'"]/g;
    return str.replace(regex, function(char) {
        switch(char) {
            case "&": return "&amp;";
            case "<": return "&lt;";
            case ">": return "&gt;";
            case '"': return "&quot;";
            case "'": return "&apos;";  
        }
    });
}

convertHTML("Dolce & Gabbana");


