const findTheOldest = function(arr) {
    let year = new Date().getFullYear();
    arr.sort((objA , objB) => {
        if(objA.hasOwnProperty('yearOfDeath') && objB.hasOwnProperty('yearOfDeath')) {
            return (objA.yearOfDeath - objA.yearOfBirth) > (objB.yearOfDeath - objB.yearOfBirth) ? -1 : 1;
        } else if(objA.hasOwnProperty('yearOfDeath') && !objB.hasOwnProperty('yearOfDeath')) {
            return (objA.yearOfDeath - objA.yearOfBirth) > (year - objB.yearOfBirth) ? -1 : 1;
        } else if(!objA.hasOwnProperty('yearOfDeath') && objB.hasOwnProperty('yearOfDeath')) {
            return (year - objA.yearOfBirth) > (objB.yearOfDeath - objB.yearOfBirth) ? -1 : 1;
        } else {
            return (year - objA.yearOfBirth) > (year - objB.yearOfBirth) ? -1 : 1;
        }
    });
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
