let currentIndex = 0;
            
function moveCarros(direction) {
    const images = document.querySelector('.carrosImg');
    const totalImages = images.children.length;
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const offset = -currentIndex * 100;
    images.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    moveCarros(1);
}, 4000);

function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");
    menu.classList.toggle("open");
    overlay.classList.toggle("show");
}

// Quando o overlay (fundo) for clicado, o menu se fecha
document.getElementById("overlay").addEventListener("click", closeMenu);

function closeMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");
    menu.classList.remove("open");
    overlay.classList.remove("show");
}

  // Seleciona o botão
    const backToTopButton = document.getElementById("backToTop");

    // Mostra/esconde o botão ao rolar a página
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 800) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // Anima a rolagem suave para o topo
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    //filtro por ano nos cards cursos anteriores


    function filtrarAno(ano) {
        const containers = document.querySelectorAll('.container');
        const containerAnteriores = containers[1]; // Aplica o filtro apenas no segundo container
        const cards = containerAnteriores.querySelectorAll('.card');

        cards.forEach(card => {
            const classes = card.classList;
            if (ano === 'todos') {
                card.style.display = 'block';
            } else {
                if (classes.contains('ano' + ano)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    }

    // Aplica filtro de 2025 somente nos cursos realizados anteriormente ao carregar
    window.addEventListener('DOMContentLoaded', () => {
        filtrarAno('2025');
    });


