 // Seleciona todos os botões de cabeçalho do acordeão
 var accordions = document.querySelectorAll(".accordion-head");

 // Adiciona um ouvinte de evento para cada botão de cabeçalho
 accordions.forEach(function (accordion) {
     accordion.addEventListener("click", function() {
         // Alterna a exibição do conteúdo
         var body = this.nextElementSibling;
         
         if (body.style.display === "block") {
             body.style.display = "none"; // Se estiver aberto, fecha
         } else {
             body.style.display = "block"; // Se estiver fechado, abre
         }
     });
 });


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
