function abraCarrossel(carouselId) {
    // Seleciona todos os elementos com a classe "carousel"
    const carousels = document.querySelectorAll('.carousel');
    
    // Esconde todos os carrosséis
    carousels.forEach(carousel => {
        if (carousel.id === carouselId) {
            // Se o carrossel atual é o clicado, alterna a visibilidade dele
            carousel.style.display = carousel.style.display === 'none' ? 'block' : 'none';
        } else {
            // Caso contrário, garante que está escondido
            carousel.style.display = 'none';
        }
    });
}
