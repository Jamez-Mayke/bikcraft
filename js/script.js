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