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
function addDiv() {
 let newDiv = document.createElement("div"), //Cria um element DIV
 container = document.getElementById("new-list-container"); //Grava a sua div que receberá novos dados em uma variável

 newDiv.innerHTML = '<p>Novo conteúdo</p>'; //Insere um conteúdo dentro da nova div

 container.append(newDiv); //Adiciona ao final da sua div o novo conteúdo
 
} 
/* 
function addDiv() {
    let resposta = document.createElement('div')
}

*/