var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 0;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var resultado = document.getElementById("resultado");

  if (tentativas < 3) {
    if (chute == numeroSecreto) {
      resultado.innerHTML = "Parabéns, você acertou!";
    } else if (chute > 10 || chute < 0) {
      resultado.innerHTML = "Número inválido! Digite um número entre 0 e 10.";
      tentativas++; // -> tentativa = tentativa + 1
    } else {
      //indicando que o jogador jogou um número válido, porém um número errado
      tentativas++;
      if (chute > numeroSecreto) {
        resultado.innerHTML = "Errou! O número secreto é menor.";
      } else {
        resultado.innerHTML = "Errou! O número secreto é maior.";
      }
    }
  } else {
    resultado.innerHTML =
      "Suas tentativas acabaram. O número secreto era: " + numeroSecreto;
  }
}