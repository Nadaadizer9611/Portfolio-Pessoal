const container = document.querySelector(".containerImagens");
const imgs = document.querySelectorAll(".containerImagens img");
const btnProximo = document.querySelector(".proximo");
const btnAnterior = document.querySelector(".anterior");

let index = 0;

function atualizarCarrossel() {
    const largura = imgs[0].clientWidth;
    container.style.transform = `translateX(-${index * largura}px)`;
}

btnProximo.addEventListener("click", () => {
    index = (index + 1) % imgs.length;
    atualizarCarrossel();
});

btnAnterior.addEventListener("click", () => {
    index = (index - 1 + imgs.length) % imgs.length;
    atualizarCarrossel();
});

window.addEventListener("resize", atualizarCarrossel);
