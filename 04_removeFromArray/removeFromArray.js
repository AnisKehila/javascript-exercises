const removeFromArray = function(arr , ...values) {
    let arrayToReturn = [];
    for(let i = 0 ; i < arr.length ; i++) {
        if(!values.includes(arr[i])) {
            arrayToReturn.push(arr[i]);
        }
    }
    return arrayToReturn;
};
// Do not edit below this line
module.exports = removeFromArray;
