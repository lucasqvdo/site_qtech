import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 0,
      tag: "INFRAESTRUTURA",
      title: "Proteção Inteligente",
      subtitle: "Feita por Especialistas.",
      desc: "Cuidamos da tecnologia invisível que protege o seu mundo. Vá viajar, trabalhe ou descanse com a certeza de que seu patrimônio está blindado por especialistas.",
      type: "hero",
      image: "/hero1-bg.png" 
    },
    {
      id: 1,
      tag: "CFTV IP",
      title: "Câmeras de Alta Performance",
      subtitle: "A certeza de que tudo está bem, na palma da sua mão.",
      desc: "Conectividade de alta performance e câmeras de alta fidelidade instaladas por especialistas. Acesse suas imagens em tempo real, de qualquer lugar do mundo, com transmissão fluida e [...]
      type: "service",
      image: "/hero2-bg.png" 
    },
    {
      id: 2,
      tag: "CONTROLE DE ACESSO",
      title: "Controle Total de Entrada",
      subititle: "A certeza de quem entra. A paz de quem fica.",
      desc: "Proteja os acessos da sua empresa ou condomínio com o que há de mais seguro. Tecnologia biométrica e facial de alta precisão para garantir que apenas pessoas autorizadas passem pe[...]
      type: "service",
      image: "/hero3-bg.png"
    }
  ];

  // Lógica de Troca Automática com Reset no Clique
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    // Limpa o timer anterior sempre que o activeSlide muda (via clique ou auto)
    return () => clearInterval(timer);
  }, [activeSlide, slides.length]);

  return (
    <main className="home-page">
      <section className="hero-refined">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slide-container ${activeSlide === index ? 'active' : ''}`}
            style={{ 
              backgroundImage: `linear-gradient(to right, rgba(10, 25, 30, 0.9) 10%, rgba(10, 25, 30, 0.4) 100%), url(${slide.image})` 
            }}
          >
            <div className="container hero-grid">
              <div className="hero-text">
                <div className="status-badge">
                  <span className="dot pulse"></span> {slide.tag}
                </div>
                <h1>{slide.title} <span>{slide.subtitle}</span></h1>
                <p>{slide.desc}</p>
                <div className="hero-actions">
                  <Link to="/loja" className="btn-main">Explorar Catálogo</Link>
                  <Link to="/quem-somos" className="btn-outline">Ver Estratégia</Link>
                </div>
              </div>

              {slide.type === "hero" && (
                <div className="hero-visual">
                  <div className="glass-card">
                    <div className="glass-header">
                      <span className="icon-shield">📱</span>
                      <span className="live-tag">ONLINE</span>
                    </div>
                    <h4>Controle Total</h4>
                    <p>Você no comando de onde estiver.</p>
                    <div className="stat-line"></div>
                    <div className="stat-line short"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        
        <div className="slide-indicators">
          {slides.map((_, i) => (
            <button 
              key={i} 
              className={`indicator ${activeSlide === i ? 'active' : ''}`}
              onClick={() => setActiveSlide(i)}
              aria-label={`Ir para o slide ${i + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* SEÇÃO DE DIFERENCIAIS */}
      <section className="pain-points">
        <div className="container">
          <div className="grid-3">
            <div className="pain-card">
              <h3>Sua câmera falha?</h3>
              <p>Nossa infraestrutura preventiva garante acesso 24h sem travamentos.</p>
            </div>
            <div className="pain-card">
              <h3>Wi-Fi lento?</h3>
              <p>Projetamos redes Mesh e cabeamento estruturado para cobertura total.</p>
            </div>
            <div className="pain-card">
              <h3>Dúvidas técnicas?</h3>
              <p>Curadoria Intelbras, Hikvision e Control iD — o padrão ouro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO CTA FINAL */}
      <section className="home-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Pronto para assumir o controle?</h2>
            <p>Solicite uma análise técnica especializada.</p>
            <a href="https://wa.me/5511984489030" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              Falar com Especialista agora
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;