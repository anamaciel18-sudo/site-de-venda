// Dados simulados dos tênis
const produtos = [
    { id: 1, nome: "Tênis Runner Pro", preco: 299.90, imagem: "tenis1.jpg" },
    { id: 2, nome: "Tênis Casual Style", preco: 189.50, imagem: "tenis2.jpg" },
    { id: 3, nome: "Tênis Skater Deluxe", preco: 350.00, imagem: "tenis3.jpg" },
    { id: 4, nome: "Tênis Training Max", preco: 420.99, imagem: "tenis4.jpg" },
    // Adicione mais produtos conforme necessário
];

let carrinho = []; // Array para armazenar os itens no carrinho

const listaProdutosElement = document.getElementById('listaProdutos');
const contadorCarrinhoElement = document.getElementById('contadorCarrinho');
const totalCarrinhoElement = document.getElementById('totalCarrinho');
const itensCarrinhoElement = document.getElementById('itensCarrinho');
const carrinhoLateralElement = document.getElementById('carrinhoLateral');

// 1. Função para exibir os produtos na página
function exibirProdutos(lista) {
    listaProdutosElement.innerHTML = ''; // Limpa a lista atual
    lista.forEach(produto => {
        const itemHTML = `
            <div class="produto-item">
                <img src="./imagens/${produto.imagem || 'default.jpg'}" alt="${produto.nome}">
                <h2>${produto.nome}</h2>
                <p class="preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
                <button class="adicionar-carrinho" data-id="${produto.id}">Adicionar ao Carrinho</button>
            </div>
        `;
        listaProdutosElement.innerHTML += itemHTML;
    });

    // Adiciona evento de clique aos botões de 'Adicionar'
    document.querySelectorAll('.adicionar-carrinho').forEach(button => {
        button.addEventListener('click', (e) => {
            const produtoId = parseInt(e.target.dataset.id);
            adicionarAoCarrinho(produtoId);
        });
    });
}

// 2. Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    if (produto) {
        const itemExistente = carrinho.find(item => item.id === id);

        if (itemExistente) {
            itemExistente.quantidade += 1;
        } else {
            carrinho.push({ ...produto, quantidade: 1 });
        }
        
        atualizarCarrinhoVisual();
    }
}

// 3. Função para atualizar a visualização do carrinho e o total
function atualizarCarrinhoVisual() {
    itensCarrinhoElement.innerHTML = '';
    let total = 0;

    carrinho.forEach(item => {
        const precoTotalItem = item.preco * item.quantidade;
        total += precoTotalItem;

        const itemCarrinhoHTML = `
            <li>
                <span>${item.nome} (x${item.quantidade})</span>
                <span>R$ ${precoTotalItem.toFixed(2).replace('.', ',')}</span>
            </li>
        `;
        itensCarrinhoElement.innerHTML += itemCarrinhoHTML;
    });

    contadorCarrinhoElement.textContent = carrinho.length; // Conta itens distintos
    totalCarrinhoElement.textContent = total.toFixed(2).replace('.', ',');
    
    if (carrinho.length === 0) {
         itensCarrinhoElement.innerHTML = '<li>O carrinho está vazio.</li>';
    }
}

// 4. Funcionalidade de Busca (Filtro)
document.getElementById('campoBusca').addEventListener('keyup', (e) => {
    const termoBusca = e.target.value.toLowerCase();
    const produtosFiltrados = produtos.filter(p => 
        p.nome.toLowerCase().includes(termoBusca)
    );
    exibirProdutos(produtosFiltrados);
});

// 5. Abrir e Fechar o Carrinho Lateral
document.getElementById('btnCarrinho').addEventListener('click', () => {
    carrinhoLateralElement.classList.add('carrinho-lateral-aberto');
    carrinhoLateralElement.classList.remove('carrinho-oculto');
});

document.getElementById('fecharCarrinho').addEventListener('click', () => {
    carrinhoLateralElement.classList.remove('carrinho-lateral-aberto');
    carrinhoLateralElement.classList.add('carrinho-oculto');
});

// 6. Finalizar Compra (Ação de exemplo)
document.querySelector('.finalizar-compra').addEventListener('click', () => {
    if (carrinho.length > 0) {
        alert('Compra finalizada com sucesso! Total: R$ ' + totalCarrinhoElement.textContent);
        carrinho = []; // Limpa o carrinho
        atualizarCarrinhoVisual();
        // Fecha o carrinho
        carrinhoLateralElement.classList.remove('carrinho-lateral-aberto');
        carrinhoLateralElement.classList.add('carrinho-oculto');
    } else {
        alert('Seu carrinho está vazio!');
    }
});


// Inicialização
exibirProdutos(produtos);
atualizarCarrinhoVisual(); // Garante que o carrinho vazio seja exibido corretamente