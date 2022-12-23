const convertToCelsius = function(fahrenheitValue) {
  return Math.round((((fahrenheitValue - 32)*5)/9) * 10) / 10;
};

const convertToFahrenheit = function(celsiusValue) {
  return Math.round((celsiusValue * (9/5) + 32)* 10) / 10;
};
console.log(convertToFahrenheit(0));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
