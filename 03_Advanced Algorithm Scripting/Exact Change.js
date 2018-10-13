/* --- TASK ---

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

*/


function checkCashRegister(price, cash, cid) {
    
    var change = cash - price,
        res = [];
    
    // calulcates sum of 2D array
    function getSumArray(elem) {
        let sum = [];
        for (let i = 0; i < elem.length; i++) {
            sum.push(elem[i][1]);
        }
        return sum.reduce((a,b) => a + b);
    };
    
    // sum of argument cid
    var sumOfCid = getSumArray(cid);
    
    if(sumOfCid < change) {
        return "Insufficient Funds";
    }
    
    else if(sumOfCid === change) {
       return "Closed";
    }
    
    else {
        // convert arguments to arr and save in args
        var args = Array.from(arguments[2]),
            i = 0;
        
        // create an object containing currency name and value
        var changeObj = args.map(function(a) {
            return {
                "id": i++,
                "name": a[0], 
                "value": a[1]
            };
        }).sort((a,b) => b.id - a.id);
        
        // object with standard translation from currency name to its value
        var currencyObj = [
            {name: "ONE HUNDRED", value: 100.00},
            {name: "TWENTY", value: 20.00},
            {name: "TEN", value: 10.00},
            {name: "FIVE", value: 5.00},
            {name: "ONE", value: 1.00},
            {name: "QUARTER", value: 0.25},
            {name: "DIME", value: 0.10},
            {name: "NICKEL", value: 0.05},
            {name: "PENNY", value: 0.01}
        ];
        
        // calculate the change
        var getChange = function(money) {
            
            // loop through the changeObj
            for (let i = 0; i < args.length; i++) {
                
                // check if the current money in loop (initial it is change) is bigger or equal to the current part in currencyObj and if the provided changeObj has a corresponding value
                if(money >= currencyObj[i].value && changeObj[i].value !== 0) {
                    
                    // save current changeObj to variable
                    var current = changeObj[i];
                    
                    // proceed if money is bigger or queal than current value
                    if(money >= current.value) {
                        
                        // push name and value into array in expected format
                        res.push([current.name, current.value]);
                        
                        // recude the value that got deducted from money (for later recursion)
                        money -= current.value;
                        
                        // set change equal to money for later control if the handed out change was big enough
                        change = money;
                        
                        // set current value to 0 because it is already pushed to array
                        current.value = 0;
                        
                        // use recursion to call function again, but fix float issue to second decimal
                        return getChange(Number(money).toFixed(2));
                        
                        // else gets called when money < current.value
                    } else {
                        // fix floating issue with decimal
                        money = Number(money).toFixed(2);
                        
                        // calculate how many times the current value needs to be handed out (e.g. 3x5 = 15)
                        var diff = Math.floor(money/currencyObj[i].value) * currencyObj[i].value;
                        // deduct diff from money
                        money -= diff;
                        
                        // push into res the expected format
                        res.push([current.name, diff]);
                        
                        // deduct diff from currencyObj.value (becaue we iterate through it again)
                        currencyObj[i].value -= Number(diff).toFixed(2);
                    }
                }
            }
        };
        
        // initial call of function with the value change
        getChange(change);
    }
    
    // check if the provided change is big enough by calculating its sum
    var changeIsBigEnough = getSumArray(res);
    
    // in case the calculated change is not as big as the change is supposed to be (cash - price) return insufficient
    if(changeIsBigEnough < change) {
       return "Insufficient Funds";
    } else {
       return res;
    }
}

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);