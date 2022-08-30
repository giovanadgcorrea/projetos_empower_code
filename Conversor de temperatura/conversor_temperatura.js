function converterFahrenheit() {
    let temperaturaCelsius = parseInt(document.getElementById('temperatura').value)
    
    let temperaturaFahrenheit = (temperaturaCelsius * 1.8) + 32
  
    let textoTemperatura = document.getElementById('resultadoTemperatura')
    resultadoTemperatura.innerHTML = temperaturaCelsius + '°C equivalem a ' + temperaturaFahrenheit + '°F';
  }
  
  function converterKelvin() {
    let temperaturaCelsius = parseInt(document.getElementById('temperatura').value)
    
    let temperaturaKelvin = temperaturaCelsius + 273.15;
  
    let textoTemperatura = document.getElementById('resultadoTemperatura')
    resultadoTemperatura.innerHTML = temperaturaCelsius + '°C equivalem a ' + temperaturaKelvin + 'K';
  }