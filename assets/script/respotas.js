function mostraResposta(tag, texto) {
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function removerSeletor(id, classe) {
    let elemento = document.getElementById(id);
    elemento.classList.remove(classe);
}

function adiconarSeletor (id,classe){
    let elemento = document.getElementById(id);
    elemento.classList.add(classe);

}
