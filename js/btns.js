function btnCriptografar() {
    let texto = document.querySelector('textarea').value;
    validado(texto , 'criptografar');
}

function btnDescriptografar() {
    let texto = document.querySelector('textarea').value;
    validadoDes(texto , 'descriptografar');
}

function btnCopiar() {
    let textoResultado = document.querySelector('.decodificador__resposta__texto').value;
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
}

function removerSeletor(id, classe) {
    let elemento = document.getElementById(id);
    elemento.classList.remove(classe);
}

function validado(texto) {
    // Adicione sua lógica de validação aqui

    // Exemplo: Remover a classe 'invisivel' do elemento com id 'exemploId'
    removerSeletor('exemploId', 'invisivel');
}

// Adicione o restante do seu código conforme necessário
