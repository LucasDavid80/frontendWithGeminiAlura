function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = '';

    // Itera sobre os dados da pesquisa
    dados.forEach((dado) => {
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
    });

    // Insere o HTML dos resultados na seção
    section.innerHTML = resultados;
}