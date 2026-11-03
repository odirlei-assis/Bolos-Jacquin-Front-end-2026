function ExpRecMenu() {
    const header = document.querySelector('header'); // Ou o container do menu

    // 1. Ativa a animação temporariamente
    header.classList.add('animando');

    // 2. Alterna a classe que abre/fecha o menu
    header.classList.toggle('menu_aberto');

    // 3. Remove a classe de animação assim que o efeito de 0.25s terminar
    setTimeout(() => {
        header.classList.remove('animando');
    }, 250);
}