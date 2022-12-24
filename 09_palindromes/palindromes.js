const palindromes = function (msg) {
    return msg.split('').reverse().filter(letter => letter !== ' ' && letter !== '.' && letter !== ',' && letter !== '!').join().toLowerCase() === msg.split('').filter(letter => letter !== ' ' && letter !== '.' && letter !== ',' && letter !== '!').join().toLowerCase();
};
console.log(palindromes('Animal loots foliated detail of stool lamina.'));

// Do not edit below this line
module.exports = palindromes;
