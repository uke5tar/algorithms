/* --- TASK ---

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

*/

// MY SOLUTION
function spinalCase(str) {    
    // regex for special chars
    var regSpecialChars = /_/g;
    // regex to separate all words based on low/up difference
    var regLowUpChars = /[a-z]+(?=[A-Z])|[A-Z][a-z]+|\w+/g;
    if(str.match(regSpecialChars)) {
        // return str with all special chards replaced with "-" + lowercase
        return str.replace(regSpecialChars, "-").toLowerCase();
    }
    else {
        // return str with all words separated by low/up regex and join them with "-" + lowercase
        return str.match(regLowUpChars).join("-").toLowerCase();
    }
}

//store all function calls in obj
var functionObj = {
    0: spinalCase("This Is Spinal Tap"), 
    1: spinalCase("thisIsSpinalTap"), 
    2: spinalCase("The_Andy_Griffith_Show"), 
    3: spinalCase("Teletubbies say Eh-oh"), 
    4: spinalCase("AllThe-small Things")
}

// loop through obj and display results of all function calls
for(var i=0 in functionObj) {
  console.log(functionObj[i]);
}

    
// FORUM SOLUTION
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

    // Replace low-upper case to low-space-uppercase
    // $1 and $2 are variables storing only within replace functions the results for each regex group ([a-z] and [A-Z])
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}