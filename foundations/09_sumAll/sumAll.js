const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }
    let dir = (a < b) ? 1 : -1;
    let sum = b;
    for (let i = a; i != b; i += dir) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
