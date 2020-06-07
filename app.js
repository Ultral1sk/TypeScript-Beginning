function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        // with the + signs it recognizes that it is a number
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
// if the function type is number and we check the last parameter itll  perform a mathematical operation add
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Cosmo', 'Max', 'as-text');
console.log(combinedNames);
