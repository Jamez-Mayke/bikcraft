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