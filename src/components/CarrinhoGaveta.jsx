// src/components/CarrinhoGaveta.jsx
import React from 'react';
import './CarrinhoGaveta.css';

function CarrinhoGaveta({ aberto, onClose, itens, onRemover, onAtualizarQuantidade }) {
  
  const totalItens = itens.reduce((sum, item) => sum + item.quantidade, 0);

  const enviarWhatsApp = () => {
    const numero = "5511999999999"; // COLOQUE SEU NÚMERO AQUI (DDI + DDD + NUMERO)
    let mensagem = "Olá QTECH! Gostaria de um orçamento para os seguintes itens:\n\n";
    
    itens.forEach(item => {
      mensagem += `• ${item.nome} (Qtd: ${item.quantidade})\n`;
    });

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Fundo escuro atrás da gaveta */}
      <div className={`drawer-overlay ${aberto ? 'active' : ''}`} onClick={onClose} />
      
      {/* A Gaveta em si */}
      <div className={`cart-drawer ${aberto ? 'open' : ''}`}>
        <div className="drawer-header">
          <h2>Meu Orçamento</h2>
          <button className="btn-close-drawer" onClick={onClose}>&times;</button>
        </div>

        <div className="drawer-content">
          {itens.length === 0 ? (
            <div className="cart-empty">
              <span>🛒</span>
              <p>Seu orçamento está vazio.</p>
              <button className="btn-voltar" onClick={onClose}>Ver Produtos</button>
            </div>
          ) : (
            <div className="cart-items-list">
              {itens.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <img src={item.imagem} alt={item.nome} className="item-img" />
                  <div className="item-details">
                    <h4>{item.nome}</h4>
                    <div className="item-controls">
                      <div className="qty-selector-mini">
                        <button onClick={() => onAtualizarQuantidade(item.id, item.quantidade - 1)}>-</button>
                        <span>{item.quantidade}</span>
                        <button onClick={() => onAtualizarQuantidade(item.id, item.quantidade + 1)}>+</button>
                      </div>
                      <button className="btn-remove" onClick={() => onRemover(item.id)}>Remover</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {itens.length > 0 && (
          <div className="drawer-footer">
            <div className="footer-summary">
              <span>Total de itens:</span>
              <strong>{totalItens}</strong>
            </div>
            <button className="btn-finalizar" onClick={enviarWhatsApp}>
              Solicitar Orçamento via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CarrinhoGaveta;