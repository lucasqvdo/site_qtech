// src/components/ProdutoModal.jsx
import React, { useState } from 'react';
import './ProdutoModal.css';

function ProdutoModal({ produto, onClose, onAdicionar }) {
  const [quantidade, setQuantidade] = useState(1);

  if (!produto) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} title="Fechar">&times;</button>
        
        <div className="modal-body">
          <div className="modal-imagem-container">
            {produto.imagem ? (
              <img src={produto.imagem} alt={produto.nome} />
            ) : (
              <span>📷 Sem Imagem</span>
            )}
          </div>

          <div className="modal-info">
            <div className="modal-header-fixo">
              <span className="modal-categoria-badge">{produto.categoria}</span>
              <h2 className="modal-titulo">{produto.nome}</h2>
              <span className="modal-marca">Fabricante: <strong>{produto.marca}</strong></span>
            </div>
            
            <div className="modal-scroll-area">
              <p className="modal-desc">{produto.descricao}</p>
              
              {produto.indicado && (
                <div className="modal-indicacao">
                  <strong>🎯 Ideal para:</strong> {produto.indicado}
                </div>
              )}

              {produto.detalhes && produto.detalhes.length > 0 && (
                <div className="modal-detalhes-lista">
                  <h3>Especificações Técnicas</h3>
                  <ul>
                    {produto.detalhes.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              )}
            </div>

            <div className="modal-footer-fixo">
              <div className="modal-qty-container">
                <span className="qty-label">Qtd:</span>
                <div className="contador-qty-modal">
                  <button onClick={() => setQuantidade(q => Math.max(1, q - 1))}>-</button>
                  <span>{quantidade}</span>
                  <button onClick={() => setQuantidade(q => q + 1)}>+</button>
                </div>
              </div>

              <button 
                className="btn-add-modal" 
                onClick={() => { 
                  onAdicionar({ ...produto, quantidade }); 
                  onClose(); 
                }}
              >
                + Adicionar ao Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdutoModal;