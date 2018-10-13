/* --- TASK ---

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

*/



function sumPrimes(num) {
    
    // function to check if number is integer
    function isInt(n) {
        return n % 1 === 0;
    }
    
    // temporary array to store all non prime numbers from 2 --> num
    var nonPrimeNumbers = [];
    
    // array for all prime numbers
    var primeNumbers = [];
    
    // loop to get all non prime numbers by counting from 2 --> num and push all numbers that are unquestionable non prime numbers
    for(let i = num; i >= 2; i--) {
        for(let j = 2; j < num; j++) {
            // if division by itself, e.g. 7/7 continue
            if(i === j) {
                continue;
            }
            // if division remainder is int (non prime number) push value to nonPrimeNumbers array and break
            if(isInt(i/j)) {
                nonPrimeNumbers.push(i);
                break;
            }
            
        }
        
        // all numbers that are not included in the nonPrimeNumbers array are prime numbers and get pushed to primeNumbers array
        if(!nonPrimeNumbers.includes(i)) {
            primeNumbers.push(i);
        }
    }
    
    // return sum of prime numbers array
    return primeNumbers.reduce((a,b) => a + b);
}

sumPrimes(10);