// Criptografia
function criptografia(texto) {
    let separadorTexto = texto.split('');
    
    separadorTexto.forEach(function(caracter, i) {
        switch (caracter) {
            case 'e':
                separadorTexto[i] = 'enter';
                break;
            case 'i':
                separadorTexto[i] = 'imes';
                break;
            case 'a':
                separadorTexto[i] = 'ai';
                break;
            case 'o':
                separadorTexto[i] = 'ober';
                break;
            case 'u':
                separadorTexto[i] = 'u';
                break;
        }
    });

    mostraResposta('.decodificador__resposta__texto', separadorTexto.join(''));
    resposta();
}

// Descroptografia
function descriptografia(texto) {
    let descriptografia = [
        ["a", "ai"], 
        ["e", "enter"], 
        ["i", "imes"], 
        ["o", "ober"], 
        ["u", "ufat"]
    ];

    for (let i = 0; i < descriptografia.length; i++) {
        if (texto.includes(descriptografia[i][1])) {
            texto = texto.replaceAll(descriptografia[i][1], descriptografia[i][0]);
        }
    }

    mostraResposta('.decodificador__resposta__texto', texto);
    resposta();
}

function mostraResposta(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function removerElemento(id) {
    let elemento = document.getElementById(id);
    elemento.parentElement.removeChild(elemento);
}

function resposta() {
    removerElemento('resImg');
    removerElemento('resP');
    removerElemento('resH');
    removerSeletor('texto__resposta', 'invisivel');
}
