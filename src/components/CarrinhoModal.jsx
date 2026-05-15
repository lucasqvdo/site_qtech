// src/components/CarrinhoModal.jsx
import React from 'react';
import './CarrinhoModal.css';

function CarrinhoModal({ isOpen, carrinho, onClose, onRemover, onAlterarQtd, onFinalizar }) {
  if (!isOpen) {
    return null;
  }

  const totalItens = carrinho.reduce((acc, item) => acc + item.qtd, 0);

  return (
    <>
      {/* Overlay: escurece o fundo e fecha ao clicar fora */}
      <div 
        className="carrinho-overlay active" 
        onClick={onClose} 
      />

      {/* Gaveta Lateral */}
      <aside className="carrinho-drawer open">
        <div className="carrinho-header">
          <h2>Meu Orçamento</h2>
          <button className="btn-fechar-gaveta" onClick={onClose} title="Fechar">&times;</button>
        </div>

        <div className="carrinho-corpo">
          {carrinho.length === 0 ? (
            <div className="carrinho-vazio">
              <span className="icon-vazio">🛒</span>
              <p>Seu orçamento ainda está vazio.</p>
              <button className="btn-continuar" onClick={onClose}>Continuar Navegando</button>
            </div>
          ) : (
            <div className="carrinho-lista">
              {carrinho.map((item) => (
                <div key={item.id} className="carrinho-item">
                  <div className="item-img-box">
                    <img src={item.imagem} alt={item.nome} />
                  </div>
                  
                  <div className="item-info">
                    <h4>{item.nome}</h4>
                    <span className="item-categoria">{item.categoria}</span>
                    
                    <div className="item-controles">
                      <div className="mini-seletor-qtd">
                        <button onClick={() => onAlterarQtd(item.id, -1)}>-</button>
                        <span>{item.qtd}</span>
                        <button onClick={() => onAlterarQtd(item.id, 1)}>+</button>
                      </div>
                      
                      <button className="btn-remover-item" onClick={() => onRemover(item.id)}>
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {carrinho.length > 0 && (
          <div className="carrinho-footer">
            <div className="resumo-linha">
              <span>Total de itens:</span>
              <strong>{totalItens} unid.</strong>
            </div>
            
            <button className="btn-whatsapp-final" onClick={onFinalizar}>
              Solicitar Orçamento via WhatsApp
            </button>
            
            <p className="aviso-footer">
              Você será redirecionado para o WhatsApp com a sua lista.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}

export default CarrinhoModal;