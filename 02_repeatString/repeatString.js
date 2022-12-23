const repeatString = function(string , counter) {
    if(counter < 0) {
        return 'ERROR';
    }
    let newString = '';
    for(let i = 0 ; i < counter ; i++) {
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
