export const catalogo = [
    {
        id : "1",
        marca: "ZARA",
        nome: "Casaco Branco Masculino",
        preco: 80,
        imagem: "product-1.jpg",
        feminino: false,
    },
    { 
        id : "2",
        marca: "ZARA",
        nome: "Casaco Preto Feminino",
        preco: 100,
        imagem: "product-2.jpg",
        feminino: true,  
    },
    {
        id : "3",
        marca: "ZARA",
        nome: "Jaqueta Camurça Masculino",
        preco: 200,
        imagem: "product-3.jpg",
        feminino: false,
        },
        { 
        id : "4",
        marca: "ZARA",
        nome: "Casaco de Lã Bege Feminino",
        preco: 250,
        imagem: "product-6.jpg",
        feminino: true,  
        },
];

export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto) {
    const produto = catalogo.find((p) => p.id === idProduto);
    const containerProdutosCarrinho = 
        document.getElementById(idContainerHtml);
  
    const elementoarticle = document.createElement("article"); //<article></article>
    const articleClasses = [
      "flex",
      "bg-stone-200",
      "rounded-lg",
      "p-1",
      "relative",
      "mb-2",
      "w-96"
    ];
  
    for (const articleClass of articleClasses){
      elementoarticle.classList.add(articleClass);
    }
  
    const cartaoProdutoCarrinho = `
    <img 
        src="./assets/img/${produto.imagem}" 
        alt=" Carrinho: ${produto.nome}" 
        class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">${produto.nome}</p>
      <p class="text-slate-600 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>
    </div>
    <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
        <p id="quant-${produto.id}" class="ml-2">${quantidadeProduto}</p>
    </div>`;
  
  elementoarticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoarticle);
  
}
