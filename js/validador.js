function validado(texto, operacao) {
    let parametros = /[A-Z-À-Ú-à-ú]/;

    if (texto === '') {
        erroTextoVazio();
    } else if (parametros.test(texto) === false) {
        if (operacao === 'criptografar') {
            criptografia(texto);
            removerSeletor('copia', 'invisivel');
        } else if (operacao === 'descriptografar') {
            descriptografia(texto);
            removerSeletor('copia', 'invisivel');
        }
    } else {
        erroCaracteresInvalidos();
    }
}
function validadoDes(texto) {
    let parametros = /[A-Z-À-Ú-à-ú]/;

    if (texto == '') {
        erroTextoVazio();
    } else if (parametros.test(texto) == false) {
        descriptografia(texto);
    } else {
        erroCaracteresInvalidos();
    }
}

function erroCaracteresInvalidos() {
    mostraResposta('.decodificador__resposta__texto', 'Apenas letras minúsculas e sem acento!');
    removerElemento('resImg');
    removerElemento('resP');
    removerElemento('resH');
    removerSeletor('texto__resposta', 'invisivel');
}

function erroTextoVazio() {
    mostraResposta('.decodificador__resposta__texto', 'Digite um texto que você deseja criptografar ou descriptografar.');
    removerElemento('resImg');
    removerElemento('resP');
    removerElemento('resH');
    removerSeletor('texto__resposta', 'invisivel');
}
