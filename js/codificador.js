
//criptografia
function criptografia(texto){
    let parametros = /[A-Z-À-Ú-à-ú]/;
    if(parametros.test(texto)==false){
        let sepadorTexto = texto.split('');
        sepadorTexto.forEach(function (caracter, i){
            if (caracter == 'e') {
                sepadorTexto[i] = 'enter';
            } else if (caracter == 'i') {
                sepadorTexto[i] = 'ines';
            } else if (caracter == 'a') {
                sepadorTexto[i] = 'ai';
            } else if (caracter == 'o') {
                sepadorTexto[i] = 'ober';
            } else if (caracter == 'u') {
                sepadorTexto[i] = 'u';
            }
        }
        );
            mostraRespota('p' , sepadorTexto.join(''));
        }else{
            mostraRespota('p' , 'Apenas letras minúsculas e sem acento!')
        }
}
// descroptografia
function descriptografia(texto){
    let parametros = /[A-Z-À-Ú-à-ú]/;
    if(parametros.test(texto)==false){
        let descriptografia = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
        for(let i =0; i <descriptografia.length; i++){
            if(texto.includes(descriptografia[i][1])){
                texto = texto.replaceAll(descriptografia[i][1], descriptografia[i][0]);
            }
            mostraRespota('p' , texto);
        }
        
        
        
    }else{
        mostraRespota('p' , 'Apenas letras minúsculas e sem acento!')
    }

}
function btnCriptografar(){
    let texto = document.querySelector('input').value;
    criptografia(texto);

    
}

function btnDescriptografar(){
    let texto = document.querySelector('input').value;
    descriptografia(texto);

    
}

   




function mostraRespota (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}







