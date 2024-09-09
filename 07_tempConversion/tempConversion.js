const convertToCelsius = function(rectalThermometer) {

  let anusTemp = (rectalThermometer - 32) * 5 / 9;

  let spermBurp = Math.round(anusTemp * 10.0) / 10.0;;
  
  return spermBurp;

};

const convertToFahrenheit = function(rectalThermometer) {

  let anusTemp = rectalThermometer * (9 / 5) + 32;

  let spermBurp = Math.round(anusTemp * 10.0) / 10.0;;
  
  return spermBurp;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
