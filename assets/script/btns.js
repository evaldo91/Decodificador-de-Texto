function btnCriptografar() {
    let texto = document.querySelector('textarea').value;
    validado(texto , 'criptografar');
    rola('.btnCopia');
}

function btnDescriptografar() {
    let texto = document.querySelector('textarea').value;
    validado(texto , 'descriptografar');
    rola('.btnCopia');

}

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
function rola(tag){
    document.querySelector(tag).scrollIntoView({behavior:'smooth'})
}





