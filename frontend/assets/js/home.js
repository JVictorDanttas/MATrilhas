const baseApiUrl = "http://localhost:3000";

async function fetchDestinos() {
    try {
        const response = await fetch(`${baseApiUrl}/destinos`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const destinos = await response.json();
        console.log(destinos)
        // Preenche o card com os dados retornados
        const cardContainer = document.getElementById('destinations__cards');
        if(destinos.length==0){
            cardContainer.textContent = "Não há destinos cadastrados";
        }
        destinos.forEach(destino => {
            const cardHTML = `
                <div class="card">
                    <a href="atrativos/${destino.id}" class="card-link">
                        <img src="${baseApiUrl}${destino.imagens[0].imagem}" alt="${destino.titulo}">
                        <div class="card-content">
                            <h3>${destino.titulo}</h3>
                            <p>${destino.descricao}</p>
                        </div>
                    </a>
                </div>
            `;
            cardContainer.innerHTML=cardHTML;
        });
    } catch (error) {
        console.error('Failed to fetch destinos:', error);
        destinos.forEach(destino => {
            cardContainer.innerHTML = 'Ocorreu um erro ao carregar destinos';
        });
    }
}

document.addEventListener('DOMContentLoaded', function(){
    fetchDestinos();
});