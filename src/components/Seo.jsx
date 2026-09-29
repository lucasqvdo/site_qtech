import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pages = {
  '/': {
    title: 'QTECH Segurança Eletrônica | CFTV, Alarmes e Controle de Acesso',
    description: 'Segurança eletrônica em São Paulo: instalação de câmeras CFTV, controle de acesso, alarmes, redes e automação para residências e empresas.'
  },
  '/servicos': {
    title: 'Serviços de Segurança Eletrônica | QTECH',
    description: 'Instalação e manutenção de CFTV, câmeras, controle de acesso, alarmes, redes e automação. Conheça os serviços da QTECH Segurança Eletrônica.'
  },
  '/quem-somos': {
    title: 'Quem Somos | QTECH Segurança Eletrônica',
    description: 'Conheça a QTECH, empresa especializada em segurança eletrônica e infraestrutura de redes, com atendimento em Diadema e São Paulo.'
  },
  '/loja': {
    title: 'Catálogo de Segurança Eletrônica | QTECH',
    description: 'Equipamentos para CFTV, segurança eletrônica, redes e controle de acesso selecionados para projetos residenciais e corporativos.'
  }
};

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pages[pathname] || pages['/'];
    const canonicalUrl = `${window.location.origin}${pathname === '/' ? '/' : pathname}`;

    document.title = page.title;
    upsertMeta('meta[name="description"]', { name: 'description', content: page.description });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: page.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: page.description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: page.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: page.description });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [pathname]);

  return null;
}