/* --- TASK ---

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

*/

// My Solution
function convertToRoman(num) {
    var result = [];
    var numToArr = num.toString().split("").map(function(item, index) {
        return parseInt(item);
    });
    
    var i = 0;
    while(i < numToArr.length) {
        if(numToArr[i] === 0) {
            numToArr.splice(i, 1);
        }
        
        else if(numToArr.length >= 4) {
            result.push("M".repeat(numToArr[i]));
            numToArr.splice(i, 1);
        }
        
        else if (numToArr.length >= 3) {
            if(numToArr[i] === 9) {
                result.push("CM");
                numToArr.splice(i, 1);
            }
            else if(numToArr[i] > 5) {
                result.push("D" + "C".repeat(numToArr[i]-5));
                numToArr.splice(i, 1);
            }
            else if(numToArr[i] === 5) {
                result.push("D");
                numToArr.splice(i, 1);
            }
            else if(numToArr[i] === 4) {
                result.push("CD");
                numToArr.splice(i, 1);
            }
            else if(numToArr[i] <= 3) {
                result.push("C".repeat(numToArr[i]));
                numToArr.splice(i, 1);
            }
        }
        
        else if (numToArr.length >= 2) {
            if(numToArr[i] === 9) {
                result.push("XC");
                numToArr.splice(i, 1);
            }
            else if(numToArr[i] > 5) {
                result.push("L" + "X".repeat(numToArr[i]-5));
                numToArr.splice(i, 1);
            }
            else if(numToArr[i] === 5) {
                result.push("L");
                numToArr.splice(i, 1);
            }
            else if(numToArr[i] === 4) {
                result.push("XL");
                numToArr.splice(i, 1);
            }
            else if(numToArr[i] <= 3) {
                result.push("X".repeat(numToArr[i]));
                numToArr.splice(i, 1);
            }
        }
        
        else if (numToArr.length >= 1) {
            if(numToArr[i] === 9) {
                result.push("IX");
                numToArr.splice(i, 1);
            }
            else if(numToArr[i] > 5) {
                result.push("V" + "I".repeat(numToArr[i]-5));
                numToArr.splice(i, 1);
            }
            else if(numToArr[i] === 5) {
                result.push("V");
                numToArr.splice(i, 1);

            }
            else if(numToArr[i] === 4) {
                result.push("IV");
                numToArr.splice(i, 1);
            }
            else if(numToArr[i] <= 3) {
                result.push("I".repeat(numToArr[i]));
                numToArr.splice(i, 1);
            }
        }
    }
    
    return result.join("");
}

convertToRoman(68);


// Solution from Freecodecamp Forum
function convertToRoman(num) {
 
var map = { M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 };
var roman ='';
for(var i in map){
  
  while(num >= map[i]){
    roman += i;
    num -= map[i];
  }
}

return roman;
}

convertToRoman(68);