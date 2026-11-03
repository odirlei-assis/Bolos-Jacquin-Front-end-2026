const bannerImg = document.getElementById('bannerImg');
const bannerLinha2 = document.querySelector('.linha2');

function ajustarMargem() {
  // Verifica se a largura da tela é menor que 768px
  if (window.innerWidth <= 768) {
    const altura = bannerImg.offsetHeight;
    bannerLinha2.style.marginBottom = `${altura + 50}px`;
  } else {
    // Opcional: Limpa a margem se a tela for maior que 768px
    bannerLinha2.style.marginBottom = `0px`; // ou = '';
  }
}

// Executa assim que a página carrega
window.addEventListener('DOMContentLoaded', ajustarMargem);

// Executa sempre que a tela muda de tamanho
window.addEventListener('resize', ajustarMargem);
