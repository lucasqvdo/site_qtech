import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pages = {
  '/': {
    title: 'QTECH Segurança Eletrônica | CFTV, Alarmes e Controle de Acesso',
    description: 'QTECH Segurança Eletrônica: instalação e soluções em CFTV, câmeras, controle de acesso, alarmes, redes e automação para residências e empresas em São Paulo.'
  },
  '/servicos': {
    title: 'Serviços de Segurança Eletrônica | QTECH',
    description: 'Conheça os serviços da QTECH: CFTV e câmeras, controle de acesso, alarmes, redes, cabeamento estruturado e automação.'
  },
  '/quem-somos': {
    title: 'Quem Somos | QTECH Segurança Eletrônica',
    description: 'Conheça a QTECH, empresa de segurança eletrônica e infraestrutura tecnológica com atendimento profissional em São Paulo.'
  },
  '/loja': {
    title: 'Catálogo de Segurança Eletrônica | QTECH',
    description: 'Equipamentos profissionais para projetos de CFTV, segurança eletrônica, controle de acesso e infraestrutura de redes.'
  }
};

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    const match = selector.match(/meta\[(name|property)="([^"]+)"\]/);
    if (match) element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pages[pathname] || {
      title: 'QTECH Segurança Eletrônica',
      description: 'Soluções profissionais em segurança eletrônica e infraestrutura tecnológica.'
    };
    const canonicalUrl = window.location.origin + (pathname === '/' ? '/' : pathname.replace(/\/$/, ''));

    document.title = page.title;
    setMeta('meta[name="description"]', 'content', page.description);
    setMeta('meta[property="og:title"]', 'content', page.title);
    setMeta('meta[property="og:description"]', 'content', page.description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'content', page.title);
    setMeta('meta[name="twitter:description"]', 'content', page.description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let schema = document.getElementById('qtech-local-business-schema');
    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'qtech-local-business-schema';
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ProfessionalService'],
      name: 'QTECH Segurança Eletrônica',
      url: window.location.origin,
      logo: window.location.origin + '/logo.png',
      image: window.location.origin + '/logo.png',
      telephone: '+55 11 98448-9030',
      email: 'lucas.qtech@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Diadema',
        addressRegion: 'SP',
        addressCountry: 'BR'
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'São Paulo'
      },
      sameAs: ['https://www.instagram.com/_q.tech'],
      description: 'Soluções em segurança eletrônica, CFTV, controle de acesso, alarmes, redes e automação.',
      knowsAbout: ['CFTV', 'Câmeras de segurança', 'Controle de acesso', 'Alarmes', 'Redes', 'Cabeamento estruturado', 'Automação']
    });
  }, [pathname]);

  return null;
}

export default SeoManager;
