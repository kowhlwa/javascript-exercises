const fibonacci = function(num) {
    if (num == 0) {
        return 0;
    } else if (num < 0) { 
        return "OOPS"
    }
    let left = 0;
    let right = 1;
    let temp;
    for (let i = 1; i < num; i++) {
        temp = right;
        right = right + left;
        left = temp;
    }
    return right;
};

/**
 * 
 * fibonacci(1) --> 1
 * fibonacci(2) --> 1
 * fibonacci(3) --> 2
 * ...
 */

// Do not edit below this line
module.exports = fibonacci;
