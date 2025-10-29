document.addEventListener('DOMContentLoaded', () => {
    const botoesAdicionar = document.querySelectorAll('.add-carrinho');
    const contadorCarrinho = document.querySelector('header nav a:last-child');
    let itensNoCarrinho = 0;

    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            // Previne o comportamento padrão (se estivesse em um formulário)
            evento.preventDefault();

            // Lógica para adicionar item
            itensNoCarrinho++;
            contadorCarrinho.textContent = `🛒 (${itensNoCarrinho})`;

            // Opcional: Feedback visual
            alert("Produto adicionado ao carrinho!");

            // Opcional: Você pode pegar os dados do tênis
            const produtoDiv = botao.closest('.produto');
            const nomeProduto = produtoDiv.getAttribute('data-nome');
            const precoProduto = produtoDiv.getAttribute('data-preco');

            console.log(`Adicionado: ${nomeProduto} - R$ ${precoProduto}`);
        });
    });
});