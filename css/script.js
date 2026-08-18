const formulario = document.getElementById("formBanda");

const resultado = document.getElementById("resultado");





formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    // PEGANDO OS VALORES DOS INPUTS

    const nome = document.getElementById("nomeBanda").value;

    const genero = document.getElementById("genero").value;

    const ano = document.getElementById("ano").value;

    const cidade = document.getElementById("cidade").value;

    const vocalista = document.getElementById("vocalista").value;

    const guitarrista = document.getElementById("guitarrista").value;

    const baixista = document.getElementById("baixista").value;

    const baterista = document.getElementById("baterista").value;

    const descricao = document.getElementById("descricao").value;

    const musica = document.getElementById("musica").value;


    // LIMPA O RESULTADO

    resultado.innerHTML = "";


    // CRIA TÍTULO PELO DOM

    const titulo = document.createElement("h2");

    titulo.textContent = "🎸 Banda cadastrada!";

    resultado.appendChild(titulo);


    // FUNÇÃO PARA CRIAR PARÁGRAFOS

    function criarTexto(rotulo, valor) {

        const paragrafo = document.createElement("p");

        const negrito = document.createElement("strong");

        negrito.textContent = rotulo + ": ";

        paragrafo.appendChild(negrito);


        const texto = document.createTextNode(
            valor || "Não informado"
        );

        paragrafo.appendChild(texto);

        resultado.appendChild(paragrafo);
    }


    // DADOS DA BANDA

    criarTexto("Nome da banda", nome);

    criarTexto("Gênero musical", genero);

    criarTexto("Ano de formação", ano);

    criarTexto("Cidade", cidade);


    // INTEGRANTES

    const integrantes = document.createElement("h2");

    integrantes.textContent = "Integrantes";

    resultado.appendChild(integrantes);


    criarTexto("🎤 Vocalista", vocalista);

    criarTexto("🎸 Guitarrista", guitarrista);

    criarTexto("🎸 Baixista", baixista);

    criarTexto("🥁 Baterista", baterista);


    // SOBRE A BANDA

    const sobre = document.createElement("h2");

    sobre.textContent = "Sobre a Banda";

    resultado.appendChild(sobre);


    criarTexto("Descrição", descricao);

    criarTexto("🎵 Música mais conhecida", musica);


    // MOSTRA O RESULTADO

    resultado.style.display = "block";


    // LEVA O USUÁRIO ATÉ O RESULTADO

    resultado.scrollIntoView({
        behavior: "smooth"
    });

});
