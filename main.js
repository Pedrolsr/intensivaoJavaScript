import { atualizarPrecoCarrinho, inicializarCarrinho, renderizarProdutosCarrinho } from "./src/menuCarrinho";
import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";


inicializarCarrinho();
renderizarCatalogo();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();


