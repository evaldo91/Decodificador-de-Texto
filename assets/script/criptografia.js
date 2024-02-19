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
                separadorTexto[i] = 'ufat';
                break;
        }
    });

    mostraResposta('resposta', separadorTexto.join(''));
    removerSeletor('copiar', 'invisible');
    removerSeletor('sr', 'desativado');
    
}
