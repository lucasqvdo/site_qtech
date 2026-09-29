import React from 'react';
import './Servicos.css';

const servicos = [
  { id: 'cftv', title: 'CFTV e câmeras de segurança', text: 'Projeto, instalação, configuração e manutenção de sistemas de monitoramento para residências, comércios, condomínios e empresas, com acesso remoto e infraestrutura adequada.' },
  { id: 'controle-de-acesso', title: 'Controle de acesso', text: 'Soluções com biometria, reconhecimento facial, fechaduras eletrônicas, controladores e catracas para organizar e proteger o acesso de pessoas.' },
  { id: 'alarmes', title: 'Alarmes e sensores', text: 'Instalação e configuração de centrais de alarme, sensores e dispositivos de proteção integrados às necessidades de cada ambiente.' },
  { id: 'redes', title: 'Redes e cabeamento estruturado', text: 'Infraestrutura de rede, organização de cabeamento, switches, Wi-Fi e conectividade para sustentar sistemas de segurança e ambientes corporativos.' },
  { id: 'automacao', title: 'Automação e integração', text: 'Integração de dispositivos e soluções de automação para tornar a operação mais prática, segura e centralizada.' }
];

function Servicos() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <span className="services-kicker">QTECH Segurança Eletrônica</span>
          <h1>Serviços de segurança eletrônica e infraestrutura</h1>
          <p>Projetos técnicos para proteger pessoas, patrimônios e operações com soluções de CFTV, controle de acesso, alarmes, redes e automação.</p>
        </div>
      </section>
      <section className="services-list" aria-label="Serviços da QTECH">
        <div className="container services-grid">
          {servicos.map((servico) => (
            <article id={servico.id} className="service-card" key={servico.id}>
              <h2>{servico.title}</h2>
              <p>{servico.text}</p>
              <a href="https://wa.me/5511984489030" target="_blank" rel="noopener noreferrer">Solicitar análise técnica</a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Servicos;
