/* --- TASK ---

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

*/

function sumAll(arr) {
  	var max =  Math.max(arr[0], arr[1]);
	var min = Math.min(arr[0], arr[1]);
	var sum = [];
  
	while (min <= max) {
      sum.push(min++);  
    }

	var result = sum.reduce(function(a, b) {
  		return a + b;
	});

	return result;
}

sumAll([1, 4]);