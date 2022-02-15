const links = document.querySelectorAll('.header-menu a')

function ativarLink(link) {
  const url = location.href;
  const hrefPage = link.href;
  if(url.includes(hrefPage)) {
    link.classList.add('ativo');
  }
}
links.forEach(ativarLink);