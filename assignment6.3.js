//JavaScript code to convert temperature from Celsius to Fahrenheit and vice-versa
var temperatureInCelsius=40;
var celsiusToFahrenheit;

celsiusToFahrenheit = (temperatureInCelsius * 9) / 5 + 32;
-console.log("Temperature of "+ temperatureInCelsius + " Celsius, will be " + celsiusToFahrenheit + " Fahrenheit" );

var temperatureInFahrenheit=104;
var fahrenheitToCelsius;

fahrenheitToCelsius=((temperatureInFahrenheit - 32) * 5) / 9;
console.log("Temperature of "+temperatureInFahrenheit + " Fahrenheit, will be " + fahrenheitToCelsius + " Celsius" );
