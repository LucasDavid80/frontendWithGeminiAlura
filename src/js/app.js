function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase();
    if (!campoPesquisa) {
        section.innerHTML = '<p> Nada foi encontrado. O campo está vazio</p>';
        return;
    }

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = '';

    // Itera sobre os dados da pesquisa
    dados.forEach((dado) => {
        if (
            dado.titulo.toLowerCase().includes(campoPesquisa) || 
            dado.descricao.toLowerCase().includes(campoPesquisa) || 
            dado.tags.toLowerCase().includes(campoPesquisa)
        ) {
            // Constrói o HTML para cada resultado, utilizando template literals
            resultados += `
            <div class="item-resultado">
                <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">
                ${dado.descricao}
                </p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
    });

    if (!resultados){
        resultados = '<p> Nada foi encontrado</p>';
    }

    // Insere o HTML dos resultados na seção
    section.innerHTML = resultados;
}

document.getElementById('campo-pesquisa').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        pesquisar();
    }
});