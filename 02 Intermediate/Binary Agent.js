/* --- TASK ---

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

*/

// My Solution
function binaryAgent(str) {
    var res = [];
    var binArr = str.split(" ");
    for (let i = 0; i < binArr.length; i++) {
         res.push(String.fromCharCode(parseInt(binArr[i], 2)));
    }
    return res.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");



// Forum Solution
function binaryAgent(str) {
    let array = str.split(' ');
    array = array.map(item=>{return String.fromCharCode(parseInt(item,2));});
return array.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");