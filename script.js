// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", () => {
    
    const botaoSaberMais = document.getElementById("btnSaberMais");
    const secaoSobre = document.getElementById("sobre");

    // Função para rolar a página suavemente até a seção "Sobre"
    botaoSaberMais.addEventListener("click", () => {
        secaoSobre.scrollIntoView({ behavior: "smooth" });
    });

});