// src/components/CardProduto.jsx
import React, { useState } from 'react';

function CardProduto({ produto, onAdicionar, onVerDetalhes }) {
  // Estado local para controlar a quantidade antes de adicionar
  const [quantidade, setQuantidade] = useState(1);

  const handleIncrement = () => setQuantidade(prev => prev + 1);
  const handleDecrement = () => setQuantidade(prev => Math.max(1, prev - 1));

  return (
    <div className="produto-card">
      <div className="produto-img-placeholder">
        {produto.marca && <span className="marca-badge">{produto.marca}</span>}
        {produto.imagem ? (
          <img src={produto.imagem} alt={produto.nome} />
        ) : (
          <span>📷 Sem Imagem</span>
        )}
      </div>

      <div className="produto-info">
        <div className="produto-textos">
          <span className="produto-categoria">{produto.categoria}</span>
          <h4>{produto.nome}</h4>
          <p className="produto-desc">{produto.descricao}</p>
        </div>
        
        <div className="produto-acoes">
          {/* Botão de Detalhes posicionado acima do bloco de compra */}
          <button className="btn-detalhes" onClick={() => onVerDetalhes(produto)}>
            Ver Detalhes
          </button>

          <div className="botoes-compra">
            {/* Seletor de Quantidade */}
            <div className="contador-qty">
              <button onClick={handleDecrement} aria-label="Diminuir quantidade">-</button>
              <span>{quantidade}</span>
              <button onClick={handleIncrement} aria-label="Aumentar quantidade">+</button>
            </div>
            
            {/* Envia o produto + a quantidade exata selecionada */}
            <button 
              className="btn-add" 
              onClick={() => onAdicionar({ ...produto, quantidade })}
            >
              + Orçamento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduto;