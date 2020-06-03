var botao = document.getElementById("botao");
var modal = document.getElementById("fundo");
var fechar = document.getElementById("fechar");

botao.onclick = function() {
    modal.classList.add("visivel");
}

fechar.onclick = function() {
    modal.classList.remove("visivel");
}

fundo.onclick = function(e) {
    if (e.target == fundo) {
        fundo.classList.remove("visivel");
    }
}