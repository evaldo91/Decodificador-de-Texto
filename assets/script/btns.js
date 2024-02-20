function btnCriptografar() {
    let texto = document.querySelector('.entrada__texto').value;
    validado(texto , 'criptografar');
    rola('.btn__copiar');
    desativDivIncial()
   
    

}

function btnDescriptografar() {
    let texto = document.querySelector('.entrada__texto').value;
    validado(texto , 'descriptografar');
    rola('.btn__copiar');
    desativDivIncial()

}

function btnCopiar() {
    let texto = document.getElementById('resposta').value;
    navigator.clipboard.writeText(texto)
        .then(() => {
            console.log('Texto copiado para a área de transferência.');
            location.reload();
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
};

    


function rola(tag){
    document.querySelector(tag).scrollIntoView({behavior:'smooth'})
}
function desativDivIncial(){
    const element = document.getElementById("ir");
    element.remove();
    removerSeletor('copiar', 'desativado');
    removerSeletor('resposta', 'desativado');

}









