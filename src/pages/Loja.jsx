// src/pages/Loja.jsx
import React, { useState } from 'react';
import CardProduto from '../components/CardProduto';
import { tabelaProdutos } from '../data/produtos';
import './Loja.css';

function Loja({ onAdicionar, onVerDetalhes }) {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [marcaAtiva, setMarcaAtiva] = useState('Todas');
  const [viewMode, setViewMode] = useState('grid'); 
  // Estado para controlar a exibição e o texto da notificação do carrinho
  const [notificacao, setNotificacao] = useState({ visivel: false, texto: '' });

  const categorias = ['Todos', ...new Set(tabelaProdutos.map(p => p.categoria))];
  const marcas = ['Todas', ...new Set(tabelaProdutos.filter(p => p.marca).map(p => p.marca))];

  const produtosFiltrados = tabelaProdutos.filter(p => {
    const matchCategoria = categoriaAtiva === 'Todos' || p.categoria === categoriaAtiva;
    const matchMarca = marcaAtiva === 'Todas' || p.marca === marcaAtiva;
    return matchCategoria && matchMarca;
  });

  // Função que intercepta o clique do card, adiciona ao app e exibe o alerta
  const handleAdicionarAoCarrinho = (produtoComQtd) => {
    // Executa a função global vinda por props (passando o objeto com a quantidade)
    onAdicionar(produtoComQtd);

    // Ativa a notificação na tela com os dados corretos
    setNotificacao({
      visivel: true,
      texto: `"${produtoComQtd.nome}" (${produtoComQtd.qtd}x) adicionado ao carrinho!`
    });

    // Remove o alerta após 3 segundos
    setTimeout(() => {
      setNotificacao({ visivel: false, texto: '' });
    }, 3000);
  };

  return (
    <div className="loja-layout">
      {/* Alerta Visual (Toast) */}
      {notificacao.visivel && (
        <div className="alerta-carrinho">
          <span className="alerta-icone">🛒</span>
          <p>{notificacao.texto}</p>
        </div>
      )}

      <section className="loja-hero">
        <div className="container">
          <div className="loja-hero-content">
            <span className="loja-badge">Catálogo Profissional</span>
            <h1>Soluções em <span>Tecnologia.</span></h1>
            <p>Equipamentos de alta disponibilidade para projetos residenciais e corporativos.</p>
          </div>
        </div>
      </section>

      <div className="loja-container-trabalho container">
        <aside className="loja-sidebar">
          <div className="filtros-header">
            <h3>Filtros</h3>
            <button className="btn-limpar-texto" onClick={() => { setCategoriaAtiva('Todos'); setMarcaAtiva('Todas'); }}>
              Limpar
            </button>
          </div>

          <div className="loja-filtros-agrupados">
            {marcas.length > 1 && (
              <div className="filtros-secao">
                <span className="filtro-label">Marcas</span>
                <div className="filtros-vertical">
                  {marcas.map(marca => (
                    <button key={marca} className={`btn-filtro-lat ${marcaAtiva === marca ? 'active' : ''}`} onClick={() => setMarcaAtiva(marca)}>
                      {marca}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="filtros-secao">
              <span className="filtro-label">Categorias</span>
              <div className="filtros-vertical">
                {categorias.map(cat => (
                  <button key={cat} className={`btn-filtro-lat ${categoriaAtiva === cat ? 'active' : ''}`} onClick={() => setCategoriaAtiva(cat)}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="loja-main-content">
          <div className="loja-topbar">
            <span className="resultado-contador">
              Exibindo <strong>{produtosFiltrados.length}</strong> equipamento{produtosFiltrados.length !== 1 ? 's' : ''}
            </span>
            <div className="view-options">
              <button className={`btn-view ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')}>⣿ Grade</button>
              <button className={`btn-view ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')}>☰ Lista</button>
            </div>
          </div>

          <div className={`produtos-wrapper ${viewMode === 'list' ? 'list-view' : 'grid-view'}`}>
            {produtosFiltrados.length > 0 ? (
              produtosFiltrados.map((item) => (
                <CardProduto 
                  key={item.id} 
                  produto={item} 
                  // Passa a função que gerencia o alerta recebendo os dados com a quantidade do card
                  onAdicionar={(produtoComQtd) => handleAdicionarAoCarrinho(produtoComQtd)} 
                  onVerDetalhes={() => onVerDetalhes(item)} 
                />
              ))
            ) : (
              <div className="loja-vazia">
                <h3>Nenhum resultado encontrado.</h3>
                <p>Não encontramos produtos para esta combinação de filtros.</p>
                <button className="btn-limpar-filtros" onClick={() => { setCategoriaAtiva('Todos'); setMarcaAtiva('Todas'); }}>Resetar Filtros</button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Loja;