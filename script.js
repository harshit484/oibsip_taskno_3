function convert() {
    // Get the input temperature and unit
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    
    // Check if the input is a number
    if (isNaN(temperature)) {
      alert("Please enter a valid temperature!");
      return;
    }
    
    // Convert the temperature based on the selected unit
    if (unit == "celsius") {
      var convertedTemperature = (temperature * 9/5) + 32;
      var unitSymbol = "°F";
    } else if (unit == "fahrenheit") {
      var convertedTemperature = (temperature - 32) * 5/9;
      var unitSymbol = "°C";
    } else if (unit == "kelvin") {
      var convertedTemperature = temperature - 273.15;
      var unitSymbol = "K";
    }
    
    // Display the converted temperature and unit
    document.getElementById("result").innerHTML = convertedTemperature.toFixed(2) + unitSymbol;
  }
  