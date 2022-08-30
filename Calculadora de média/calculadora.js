function calcularMedia() {
  var nota1 = parseFloat(document.getElementById('nota1').value)
  var nota2 = parseFloat(document.getElementById('nota2').value)
  var nota3 = parseFloat(document.getElementById('nota3').value)
  var nota4 = parseFloat(document.getElementById('nota4').value)
  
  var media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1)
  
  var textoMedia = document.getElementById('resultadoMedia')
  
  if(media >= 5) {
    textoMedia.innerHTML = 'Média: ' + media + ' <br><br> Aprovado(a)'
    textoMedia.style.color = '#006400'
  } else if (media >= 4 && media < 5) {
    textoMedia.innerHTML = 'Média: ' + media + ' <br><br> Recuperação'
    textoMedia.style.color = '#A0522D'
  } else {
    textoMedia.innerHTML = 'Média: ' + media + ' <br><br> Reprovado(a)'
    textoMedia.style.color = '#FF0000'
  }
}