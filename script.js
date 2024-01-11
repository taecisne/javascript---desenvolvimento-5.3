// Método Simples
document.getElementById('titulo').innerText = 'Bem-vindo à nossa loja!';

// Método Complexo
const produtoContainer = document.createElement('div');
produtoContainer.classList.add('produto');

const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Produto A';

const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Descrição do Produto A. Um produto incrível que você vai adorar!';

const precoProduto = document.createElement('span');
precoProduto.innerText = 'Preço: R$ 99,99';

const imagemProduto = document.createElement('img');
imagemProduto.src = 'caminho/para/imagem.jpg';
imagemProduto.alt = 'Imagem do Produto A';

produtoContainer.appendChild(nomeProduto);
produtoContainer.appendChild(descricaoProduto);
produtoContainer.appendChild(precoProduto);
produtoContainer.appendChild(imagemProduto);

document.body.appendChild(produtoContainer);
