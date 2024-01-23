// valiadador

function valiadador(texto){
    let parametros = /[A-Z-À-Ú-à-ú]/;
    if(parametros.test(texto)==false){
        criptografia(texto);
        
    }else{
        mostraRespota('p' , 'Apenas letras minúsculas e sem acento!')
    }

}

function valiadadorDes(texto){
    let parametros = /[A-Z-À-Ú-à-ú]/;
    if(parametros.test(texto)==false){
        descriptografia(texto);
        
    }else{
        mostraRespota('p' , 'Apenas letras minúsculas e sem acento!')
    }

}