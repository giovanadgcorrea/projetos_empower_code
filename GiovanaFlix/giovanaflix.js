let imagens = [
  "https://conteudo.imguol.com.br/c/entretenimento/58/2022/05/12/novo-poster-da-quarta-temporada-de-stranger-things-1652368177430_v2_3x4.jpg",
  "https://i.pinimg.com/originals/77/5d/f4/775df46c87df59eca37b44299a80604f.jpg",
  "https://image.tmdb.org/t/p/original/iVX1jUchy3zTaZeL12Lo7HqDEly.jpg",
  "https://m.media-amazon.com/images/M/MV5BYTZmNTg3ZWYtZTQ1ZC00OTliLWFlNjQtODk1YzQ4NGI5ZmNlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
  "https://mypostercollection.com/wp-content/uploads/2018/03/Friends-poster-cast.jpg",
  "https://c3.quickcachr.fotos.sapo.pt/i/Gba054ea4/20756615_cHlFF.jpeg"
];

let links = [
  "https://www.youtube.com/watch?v=yTX0HxTq9wo",
  "https://www.youtube.com/watch?v=rlR4PJn8b8I",
  "https://www.youtube.com/watch?v=r7WdCz3PXWc",
  "https://www.youtube.com/watch?v=cq2iTHoLrt0",
  "https://www.youtube.com/watch?v=IEEbUzffzrk",
  "https://www.youtube.com/watch?v=Jq0hwEXhnJ0"
];

let nomes = [
  "Stranger Things",
  "Game of Thrones",
  "Beforeigners",
  "Dark",
  "Friends",
  "Rita"
];

let containerSeries = document.getElementById("containerSeries");

function exibirSeriesNaTela() {
  containerSeries.innerHTML = "";

  for (var i = 0; i < imagens.length; i++) {
    containerSeries.innerHTML += `
                                <div class="serie">
                                <img src="${imagens[i]}" class="imagens">
                                <a href="${links[i]} class="link" target="_blank">${nomes[i]}</a>
                                </div>
                                `;
  }
}

exibirSeriesNaTela();

function adicionarNovaSerieNaTela() {
  let nomeDaSerie = document.getElementById("nomeDaSerie").value;
  let linkImagem = document.getElementById("linkImagem").value;
  let linkTrailer = document.getElementById("linkTrailer").value;

  let condicoesAprovadas = 0;

  if (nomes.includes(nomeDaSerie)) {
    alert("Esse título já está na lista!");
  } else {
    condicoesAprovadas++;
  }

  if (imagens.includes(linkImagem)) {
    alert("Essa imagem já está na lista!");
  } else {
    condicoesAprovadas++;
  }

  if (links.includes(linkTrailer)) {
    alert("Esse link já está na lista!");
  } else {
    condicoesAprovadas++;
  }

  console.log(condicoesAprovadas);

  if (condicoesAprovadas === 3) {
    nomes.push(nomeDaSerie);
    imagens.push(linkImagem);
    links.push(linkTrailer);
    exibirSeriesNaTela();
  }
}