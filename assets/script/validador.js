function validado(texto, operacao) {
    // Corrigindo a expressão regular para aceitar apenas letras minúsculas e com acento
    let parametros = /[A-Z-À-Ú-à-ú]/;

    if (texto === '') {
        erroTextoVazio();
    } else if (!parametros.test(texto)) {
        if (operacao === 'criptografar') {
            // Adicionando chamada para a função de criptografia
            criptografia(texto);
        } else if (operacao === 'descriptografar') {
            // Adicionando chamada para a função de descriptografia
            descriptografia(texto);
        }
    } else {
        erroCaracteresInvalidos();
    }
}

function erroCaracteresInvalidos() {
    mostraResposta('.saida__de__texto', 'Apenas letras minúsculas e com acento são permitidas!');
}

function erroTextoVazio() {
    mostraResposta('.saida__de__texto', 'Digite um texto que você deseja criptografar ou descriptografar.');
}
