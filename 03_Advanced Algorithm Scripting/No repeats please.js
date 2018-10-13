/* --- TASK ---

Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

*/

function permAlone(str) {
    // computes all possible permutations and stores them as separate arrays in result
    const permutator = (inputArr) => {
        let result = [];
        const permute = (arr, m = []) => {
            if (arr.length === 0) {
                result.push(m);
            } 
            else {
                for (let i = 0; i < arr.length; i++) {
                    let curr = arr.slice();
                    let next = curr.splice(i, 1);
                    permute(curr.slice(), m.concat(next));
                }
            }
        };
        permute(inputArr);
        return result; // array with results
    };
    
    // calls permutator func with the "splitted" argument on each array in result 
    return permutator(str.split("")).map(arr => {
        // returns true if the current processed "arr" Array passes the condition. otherwise false.
         return arr.every((currVal, index, array) => {
             // index of first value index to false || checks if current value is equal to previous value
             return index === 0 || currVal !== array[index - 1];
         });
        // filters everything that is true and counts it
    }).filter(item => item).length;
}

permAlone("aab");