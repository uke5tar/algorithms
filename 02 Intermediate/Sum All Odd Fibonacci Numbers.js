/* --- TASK ---

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

*/

// my solution
function sumFibs(num) {
    
    // assign 0, 1 as starting values to fibsArr
    var fibsArr = [0, 1];
    
    // biggest value in fibsArr
    var max = Math.max(...fibsArr);
    while(max < num) {
        // last value in in fibsArr
        var last = fibsArr[fibsArr.length-1];
        
        // second last value in in fibsArr
        var secondLast = fibsArr[fibsArr.length-2];
        
        // sum of last & second last
        var sum = last + secondLast;
        
        //if sum <= push sum into fibsArr and reassign max value of fibsArr else break
        if(sum <= num) {
            fibsArr.push(sum);
            max = Math.max(...fibsArr);;
        } else {
            break;
        }
    }
    
    // filter fibsArr by all odd numbers and store it to oddFibsArr
    var oddFibsArr = fibsArr.filter(function(a) {
        return a % 2 !== 0;
    });
    
    // return sum of oddFibsArr
    return oddFibsArr.reduce(function(a,b) {
        return a + b;
    });
}

sumFibs(4);


// forum solution
function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }
        var added = currNumber + prevNumber;
        prevNumber = currNumber;
        currNumber = added;
    }

    return result;
}

//store all function calls in obj
var functionObj = {
    0: sumFibs(1), 
    1: sumFibs(1000), 
    2: sumFibs(4000000), 
    3: sumFibs(4), 
    4: sumFibs(75024),
    5: sumFibs(75025)
}

// loop through obj and display results of all function calls
for(var i=0 in functionObj) {
  console.log(functionObj[i]);
}

