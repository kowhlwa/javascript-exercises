const removeFromArray = function() {
    let arr = [];
    for (const arg of arguments) {
        if (Array.isArray(arg)) {
            arr = arg;
        } else {
            let removeIndex = arr.lastIndexOf(arg);
            while (removeIndex != -1) {
                arr.splice(removeIndex, 1);
                removeIndex = arr.lastIndexOf(arg);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
