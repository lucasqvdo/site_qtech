// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ itensNoCarrinho = 0, onAbrirCarrinho }) {
  // Estado para controlar a abertura da gaveta de links no mobile
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <header className="qtech-header">
      <div className="container header-content">
        
        {/* 1. BOTÃO HAMBÚRGUER (Aparece na esquerda no mobile pelo CSS) */}
        <button 
          className={`hamburger ${menuAberto ? 'ativo' : ''}`} 
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <span className="linha"></span>
          <span className="linha"></span>
          <span className="linha"></span>
        </button>

        {/* 2. LOGO DA QTECH (Centralizada no mobile pelo CSS) */}
        <a href="/" className="header-logo-link" onClick={fecharMenu}>
          <img src="/logo.png" alt="QTECH" className="header-logo-img" />
        </a>

        {/* 3. NAVEGAÇÃO DE LINKS (Geralmente oculta no mobile dentro da gaveta) */}
        <div className={`nav-wrapper ${menuAberto ? 'aberto' : ''}`}>
          <nav className="header-nav">
            <Link to="/" className="nav-link" onClick={fecharMenu}>Home</Link>
            <Link to="/loja" className="nav-link" onClick={fecharMenu}>Catálogo</Link>
            <Link to="/quem-somos" className="nav-link" onClick={fecharMenu}>Quem Somos</Link>
          </nav>
        </div>

        {/* 4. AÇÕES DA DIREITA (Carrinho/Orçamento sempre à direita) */}
        <div className="header-right-actions">
          <button className="btn-header-orcamento" onClick={onAbrirCarrinho}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="22" height="22" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            
            <span className="cart-text">Meu Orçamento</span>

            {/* Mostra a bolinha apenas se houver itens */}
            {itensNoCarrinho > 0 && (
              <span className="cart-badge">{itensNoCarrinho}</span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;