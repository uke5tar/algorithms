/* --- TASK ---

Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

*/
    

function orbitalPeriod(arr) {
    const GM = 398600.4418, //given graviational parameter
        earthRadius = 6367.4447, // given earth Radius
        // func to calculate orbital period
        calcOrbitalPeriod = function(value) {
            let calcCounter = Math.pow((earthRadius + value.avgAlt), 3),
                calcSqrt = Math.sqrt(calcCounter/GM);
            return Math.round((Math.PI*2)*calcSqrt);
        };
    // delete avgAlt property on each element and add orbitalPeriod with the calculation result to the obj
    arr.map(elem => {
        elem.orbitalPeriod = calcOrbitalPeriod(elem);
        delete elem.avgAlt;
    });
    return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);