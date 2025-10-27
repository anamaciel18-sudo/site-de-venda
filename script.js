// Ação para o botão de compra
document.addEventListener('DOMContentLoaded', () => {
    const botoesComprar = document.querySelectorAll('.btn-comprar');

    botoesComprar.forEach(button => {
        button.addEventListener('click', (event) => {
            // Pega o card do tênis
            const card = event.target.closest('.tenis-card');
            const nomeTenis = card.querySelector('.tenis-nome').textContent;

            // Alerta simples para simular a adição ao carrinho
            alert(`"${nomeTenis}" adicionado ao carrinho!`);
            
            // Você pode adicionar lógica mais complexa aqui, como:
            // 1. Adicionar o item a um array de carrinho.
            // 2. Atualizar a contagem de itens no cabeçalho.
        });
    });

    // Exemplo de interatividade (mudança de cor ao clicar em um nome)
    const nomesTenis = document.querySelectorAll('.tenis-nome');
    nomesTenis.forEach(nome => {
        nome.addEventListener('click', () => {
            // Alterna uma classe CSS ao clicar no nome
            nome.classList.toggle('highlight');
        });
    });
});

// Adicione esta classe no seu CSS para o efeito de highlight:
/*
.highlight {
    color: #ffc107 !important;
    text-decoration: underline;
    cursor: pointer;
}
*/