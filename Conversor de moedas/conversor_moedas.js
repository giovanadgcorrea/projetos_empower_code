// valores de cotação em agosto de 2022

function ConverterDolar() {
    var valorEmReal = document.getElementById("valor");
    var valor = valorEmReal.value;
    var valorEmDolar = valor * 0.18;
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var resultado = "R$ " + valor + " valem U$ " + valorEmDolar.toFixed(2);
    elementoValorConvertido.innerHTML = resultado;
  }
  
  function ConverterEuro() {
    var valorEmReal = document.getElementById("valor");
    var valor = valorEmReal.value;
    var valorEmEuro = valor * 0.19;
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var resultado = "R$ " + valor + " valem " + valorEmEuro.toFixed(2) + " €";
    elementoValorConvertido.innerHTML = resultado;
  }
  
  function ConverterBitcoin() {
    var valorEmReal = document.getElementById("valor");
    var valor = valorEmReal.value;
    var valorEmBitcoin = valor * 0.000008;
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var resultado =
      "R$ " + valor + " valem " + valorEmBitcoin.toFixed(7) + " bitcoins";
    elementoValorConvertido.innerHTML = resultado;
  }