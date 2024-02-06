function btnCriptografar() {
    let texto = document.querySelector('textarea').value;
    validado(texto , 'criptografar');
    rola('.btnCopia');
    invisivelRespota()
    addDiv()
    

}

function btnDescriptografar() {
    let texto = document.querySelector('textarea').value;
    validado(texto , 'descriptografar');
    rola('.btnCopia');
    invisivelRespota()

}
/*
function btnCopiar() {
    let textoResultado = document.getElementById('resposta').value;  // Corrigido para 'resposta'
    if (textoResultado) {
        // Copiar para a área de transferência
        navigator.clipboard.writeText(textoResultado)
            .then(() => {
                console.log('Texto copiado com sucesso!');
            })
            .catch((err) => {
                console.error('Erro ao copiar texto:', err);
            });
    }
    rola('.logo');
    
    
    

}
*/
function btnCopiar() {
    let textoResultado = document.getElementById('resposta').value;  // Corrigido para 'resposta'
    if (textoResultado) {
        // Copiar para a área de transferência
        navigator.clipboard.writeText(textoResultado)
            .then(() => {
                console.log('Texto copiado com sucesso!');
            })
            .catch((err) => {
                console.error('Erro ao copiar texto:', err);
            });
    }
    mostraResposta('resposta', ' ');
    adiconarSeletor('resposta', 'invisivel');
    adiconarSeletor('copy', 'invisivel');
    removerSeletor('cr', 'invisivel');
    mostraResposta('textInput', 'Digite seu texto...');
    topFunction();
   

    
}


function rola(tag){
    document.querySelector(tag).scrollIntoView({behavior:'smooth'})
}


function invisivelRespota() {
    adiconarSeletor('cr', 'invisivel');
    removerSeletor('resposta', 'invisivel')
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function eraseText() {
    document.getElementById("output").value = "";
}



