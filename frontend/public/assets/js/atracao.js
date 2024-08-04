const baseApiUrl = "http://localhost:3000";
const atracaoTitulo = document.querySelector('.atracao__titulo');
const atracaoDescricao = document.querySelector('.atracao__descricao');
const atracaoBannerImg = document.querySelector('.atracao__banner-img');
const estabelecimentosLista = document.querySelector('.atracao__estabelecimentos-lista');
const atracaoMapa = document.querySelector('.atracao__mapa');

async function fetchAtracaoById() {
    try {
        const atracao_id = getAtracaoIdUrl();
        
        const response = await fetch(`${baseApiUrl}/atracoes/${atracao_id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const atracao = await response.json();
        
        // Preenche os elementos com os dados retornados
        atracaoTitulo.textContent = atracao.titulo;
        atracaoDescricao.textContent = atracao.descricao;

        let imagem_url = atracao.imagens[0]?.imagem;
        if (imagem_url) {
            imagem_url = baseApiUrl + imagem_url;
        } else {
            imagem_url = '/assets/img/atracao-default.png';
        }
        atracaoBannerImg.src = imagem_url;
        atracaoBannerImg.alt = `Imagem de ${atracao.titulo}`;

        if (atracao.estabelecimentos?.length == 0) {
            estabelecimentosLista.innerHTML = "<span class='warning'>Não há estabelecimentos cadastrados</span>";
        } else {
            atracao.estabelecimentos.forEach(estabelecimento => {
                const estabelecimentoHTML = `
                    <li class="atracao__estabelecimento">${estabelecimento.titulo}</li>
                `;
                estabelecimentosLista.innerHTML += estabelecimentoHTML;
            });
        }

        // Aqui você pode adicionar código para preencher o mapa, se necessário
        // Por exemplo, você pode usar a API de mapas do Google ou qualquer outra de sua escolha

    } catch (error) {
        console.error('Failed to fetch atracao:', error);
        atracaoTitulo.textContent = "Erro ao carregar atração";
        atracaoDescricao.innerHTML = "<span class='warning'>Ocorreu um erro ao carregar a atração</span>";
    }
}

function getAtracaoIdUrl(){
    const currentUrl = window.location.pathname;
    const urlSegments = currentUrl.split('/');
    let atracaoId = urlSegments[2]; // atracoes/:id

    atracaoId = atracaoId.replace(/\D/g, '');

    if (atracaoId === '') {
        window.alert('Parâmetro de URL inválido');
        window.location.href = '/'; // página inicial
    } else {
        console.log('atracao_id:' + atracaoId);
        return atracaoId;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    fetchAtracaoById();
});

