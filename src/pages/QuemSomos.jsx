// src/pages/QuemSomos.jsx
import React from 'react';
import './QuemSomos.css';

function QuemSomos() {
  return (
    <div className="about-page">
      {/* SEÇÃO MANIFESTO (HERO) */}
      <section className="about-manifesto">
        <div className="container">
          <div className="manifesto-content">
            <span className="subtitle">Nossa Essência</span>
            <h1>Segurança é uma <br/><span>Estratégia de Vida.</span></h1>
            <p className="lead">
              Na QTech, não instalamos apenas câmeras. Projetamos <strong>tranquilidade.</strong> 
              Transformamos tecnologia em <strong>proteção</strong> invisível e constante.
              Projetamos infraestruturas de segurança e redes de alta disponibilidade que colocam o controle absoluto do seu patrimônio na palma da sua mão.
            </p>
          </div>
        </div>
      </section>

{/* SEÇÃO EXPERTISE */}
      <section className="about-expertise">
        <div className="container grid-split">
          <div className="expertise-image-container">
            
            <div className="visual-tech-box">
              <img 
                src="/lucas.jpeg" 
                alt="Lucas Quevedo - Fundador QTECH" 
                className="founder-photo" 
              />
            </div>
            
            {/* NOVO: Nome e Cargo abaixo da foto */}
            <div className="founder-caption">
              <strong>Lucas Quevedo</strong>
              <span>CEO da QTECH</span>
            </div>

          </div>
          <div className="expertise-text">
            <h2>Por que a QTech?</h2>
            <div className="expertise-item">
              <h3>🔍 Verificação Silenciosa</h3>
              <p>Sistemas de segurança falham em silêncio. Nosso trabalho é garantir que o erro não seja descoberto tarde demais.</p>
            </div>
            <div className="expertise-item">
              <h3>🛠️ Engenharia Sob Medida</h3>
              <p>Analisamos pontos cegos e fluxos antes de cada instalação. Segurança eletrônica com rigor técnico.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE PASTAS EMPILHADAS */}
      <section className="about-values">
        <div className="container">
          <div className="values-stack">
            
            {/* PASTA 01 - MISSÃO */}
            <div className="value-card sticky-card card-1">
              <div className="card-tab">01. Missão</div>
              <div className="card-content">
                <h2>Tranquilidade e <span>proteção real.</span></h2>
                <p>
                  Proteger pessoas, empresas e patrimônios por meio de soluções tecnológicas e de segurança inteligentes, 
                  operando sempre com o mais alto padrão profissional para entregar proteção ao que é mais importante para os nossos clientes.
                </p>
              </div>
            </div>

            {/* PASTA 02 - VISÃO */}
            <div className="value-card sticky-card card-2">
              <div className="card-tab">02. Visão</div>
              <div className="card-content">
                <h2>Autoridade e <span>excelência técnica.</span></h2>
                <p>
                  Ser a marca especialista de referência em segurança eletrônica e tecnologia. Buscamos o reconhecimento absoluto 
                  pela execução impecável e atendimento profissional, consolidando nossa autoridade sem competir por preço.
                </p>
              </div>
            </div>

            {/* PASTA 03 - VALORES */}
            <div className="value-card sticky-card card-3">
              <div className="card-tab">03. Valores</div>
              <div className="card-content">
                <p className="intro-valores">Nossos princípios refletem uma personalidade segura, técnica e acessível:</p>
                <div className="valores-grid">
                  <div className="valor-item-box">
                    <strong>Confiança e Autoridade</strong>
                    <p>Atuação transparente e especializada, transmitindo domínio técnico em cada projeto.</p>
                  </div>
                  <div className="valor-item-box">
                    <strong>Inovação Tecnológica</strong>
                    <p>Integração do que há de mais moderno para garantir controle e precisão absoluta.</p>
                  </div>
                  <div className="valor-item-box">
                    <strong>Proteção Contínua</strong>
                    <p>O cuidado e a estabilidade do patrimônio e da vida no centro de tudo o que fazemos.</p>
                  </div>
                  <div className="valor-item-box">
                    <strong>Profissionalismo</strong>
                    <p>Rigor na execução e atendimento eficiente, eliminando amadorismo e soluções genéricas.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CITAÇÃO FINAL */}
      <section className="about-quote">
        <div className="container">
          <blockquote>
            "Segurança não é custo, é investimento para preservar o que levou anos para ser construído."
          </blockquote>
          <cite>— Lucas Quevedo</cite>
        </div>
      </section>
    </div>
  );
}

export default QuemSomos;