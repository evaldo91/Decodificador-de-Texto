
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

    mostraResposta('resposta', texto);
    removerSeletor('copiar', 'invisible');
    removerSeletor('sr', 'desativado');
  
    
}