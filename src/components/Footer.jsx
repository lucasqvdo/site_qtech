// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  // Função para rolar para o topo ao clicar em um link (opcional, mas recomendado)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-geral">
      <div className="footer-container">
        
        {/* Coluna 1: Branding */}
        <div className="footer-col">
          <Link to="/" className="footer-logo" onClick={scrollToTop}>
            Q<span>Tech</span>
          </Link>
          <p className="footer-tagline">
            Soluções inteligentes em segurança eletrônica e infraestrutura de redes. 
            Comprometimento com o seu patrimônio.
          </p>
        </div>

        {/* Coluna 2: Navegação Rápida (Páginas Internas) */}
        <div className="footer-col">
          <h4>Navegação</h4>
          <nav className="footer-nav">
            <Link to="/" onClick={scrollToTop}>Início</Link>
            <Link to="/quem-somos" onClick={scrollToTop}>Quem Somos</Link>
            <Link to="/loja" onClick={scrollToTop}>Catálogo de Produtos</Link>
          </nav>
        </div>

        {/* Coluna 3: Contato Direto */}
        <div className="footer-col">
          <h4>Contato</h4>
          <ul className="footer-contact-list">
            <li>
              <a href="https://wa.me/5511984489030" target="_blank" rel="noreferrer">
                📞 (11) 98448-9030
              </a>
            </li>
            <li>
              <a href="mailto:lucas.qtech@gmail.com">
                📧 lucas.qtech@gmail.com
              </a>
            </li>
            <li>📍 Diadema - SP</li>
          </ul>
        </div>

        {/* Coluna 4: Social */}
        <div className="footer-col">
          <h4>Siga a QTech</h4>
          <div className="footer-social">
            {/* Link Externo: Usamos <a> em vez de <Link> */}
            <a 
              href="https://www.instagram.com/_q.tech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              Instagram
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} QTech Segurança Eletrônica. Todos os direitos reservados.</p>
        <p className="footer-dev-info">Localizada em Diadema, atendendo toda São Paulo.</p>
      </div>
    </footer>
  );
}

export default Footer;