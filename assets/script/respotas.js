function mostraResposta(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function removerSeletor(id, classe) {
    let elemento = document.getElementById(id);
    elemento.classList.remove(classe);
}