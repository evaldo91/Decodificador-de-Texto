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

    mostraResposta('.saida__de__texto', separadorTexto.join(''));
    removerSeletor('copy', 'invisivel');
    
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

    mostraResposta('.saida__de__texto', texto);
    removerSeletor('copy', 'invisivel')
    
}