// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-refined">
        <div className="container hero-grid">
          <div className="hero-text">
            <div className="status-badge">
              <span className="dot pulse"></span> Disponível em Diadema e Região
            </div>
            <h1>Segurança Inteligente <span>Feita por Especialistas.</span></h1>
            <p>
              Projetamos infraestruturas de segurança e redes de alta disponibilidade 
              que colocam o controle absoluto do seu patrimônio na palma da sua mão.
            </p>
            <div className="hero-actions">
              <Link to="/loja" className="btn-main">Explorar Catálogo</Link>
              <Link to="/quem-somos" className="btn-outline">Nossa Estratégia</Link>
            </div>
          </div>
          
          <div className="hero-visual">
             <div className="glass-card">
                <div className="glass-header">
                  <span className="icon-shield">📱</span> {/* Ícone de celular para dar ideia de acesso remoto */}
                  <span className="live-tag">ONLINE</span>
                </div>
                <h4>Controle Total</h4>
                <p>Você no comando do seu patrimônio de onde estiver, 24/7.</p>
                <div className="glass-stats">
                  <div className="stat-line"></div>
                  <div className="stat-line short"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="pain-points">
        <div className="container">
          <div className="grid-3">
            <div className="pain-card">
              <h3>Sua câmera falha quando você mais precisa?</h3>
              <p>Nossa infraestrutura preventiva garante que você tenha acesso às suas imagens 24h por dia, sem quedas ou travamentos.</p>
            </div>
            <div className="pain-card">
              <h3>Wi-Fi lento ou com pontos cegos?</h3>
              <p>Projetamos redes Mesh e cabeamento estruturado para cobertura total em áreas residenciais e corporativas.</p>
            </div>
            <div className="pain-card">
              <h3>Dúvida sobre qual equipamento comprar?</h3>
              <p>Curadoria técnica especializada: Intelbras, Hikvision e Control iD — o padrão ouro de mercado.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Pronto para assumir o controle da sua segurança?</h2>
            <p>Solicite uma análise técnica e descubra as vulnerabilidades do seu patrimônio.</p>
            <a href="https://wa.me/5511984489030" target="_blank" rel="noreferrer" className="btn-whatsapp">
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;