// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import CarrinhoModal from './components/CarrinhoModal';
import ProdutoModal from './components/ProdutoModal';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Loja from './pages/Loja';

import './App.css';

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [isCarrinhoAberto, setIsCarrinhoAberto] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const adicionarAoOrçamento = (produto) => {
    // Captura a quantidade vinda do componente (Card ou Modal)
    const qtdAdicionada = produto.quantidade || produto.qtd || 1;

    setCarrinho((prev) => {
      const itemExiste = prev.find(item => item.id === produto.id);
      if (itemExiste) {
        return prev.map(item => 
          item.id === produto.id 
            ? { ...item, qtd: item.qtd + qtdAdicionada } 
            : item
        );
      }
      return [...prev, { ...produto, qtd: qtdAdicionada }];
    });
    // Carrinho não abre automaticamente conforme solicitado
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter(item => item.id !== id));
  };

  const alterarQuantidade = (id, delta) => {
    setCarrinho(carrinho.map(item => 
      item.id === id ? { ...item, qtd: Math.max(1, item.qtd + delta) } : item
    ));
  };

  const enviarWhatsApp = () => {
    if (carrinho.length === 0) return;
    const lista = carrinho.map(p => `• ${p.qtd}x ${p.nome}`).join('\n');
    const msg = `Olá QTECH! Gostaria de um orçamento para:\n\n${lista}`;
    window.open(`https://wa.me/5511984489030?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <Router>
      <div className="App">
        <Header 
          itensNoCarrinho={carrinho.reduce((acc, curr) => acc + curr.qtd, 0)} 
          onAbrirCarrinho={() => setIsCarrinhoAberto(true)}
        />
        
        <main className="conteudo-principal">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/loja" element={<Loja onAdicionar={adicionarAoOrçamento} onVerDetalhes={setProdutoSelecionado} />} />
          </Routes>
        </main>

        <Footer />

        <CarrinhoModal 
          isOpen={isCarrinhoAberto}
          carrinho={carrinho}
          onClose={() => setIsCarrinhoAberto(false)}
          onRemover={removerDoCarrinho}
          onAlterarQtd={alterarQuantidade}
          onFinalizar={enviarWhatsApp}
        />

        {produtoSelecionado && (
          <ProdutoModal 
            produto={produtoSelecionado} 
            onClose={() => setProdutoSelecionado(null)} 
            onAdicionar={adicionarAoOrçamento}
          />
        )}
      </div>
    </Router>
  );
}

export default App; 