// ativiar links do menu
const links = document.querySelectorAll('.header-menu a')

function ativarLink(link) {
  const url = location.href;
  const hrefPage = link.href;
  if(url.includes(hrefPage)) {
    link.classList.add('ativo');
  }
}
links.forEach(ativarLink);

// activate budget items
const param = new URLSearchParams(location.search);
function parametersURL(param) {
  const element = document.getElementById(param);
  if(element) element.checked = true;
}
param.forEach(parametersURL)

// perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function mostrarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);

  resposta.classList.toggle('ativa');
  const ativa = resposta.classList.contains('ativa')
  pergunta.setAttribute('aria-expanded', ativa);
}

function ativarPerguntas(pergunta) {
  pergunta.addEventListener('click', mostrarPergunta);
}

perguntas.forEach(ativarPerguntas);


// Galeria das bicicletas
const galeriaContainer = document.querySelector('.bicicleta-imagens');
const galeria = document.querySelectorAll('.bicicleta-imagens img');

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 1000px)').matches;
  if(media) galeriaContainer.prepend(img);
}

function clicarImagem(img) {
  img.addEventListener('click', trocarImagem);
}
galeria.forEach(clicarImagem);