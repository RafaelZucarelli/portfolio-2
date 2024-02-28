import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const DigitarTexto = () => {
  const [texto, setTexto] = useState('');
  const conteudo = "Olá! Eu sou o Rafael Zucarelli, Desenvolvedor Frontend Jr.";
  const velocidadeDigitacao = 100; // Velocidade de digitação em milissegundos

  useEffect(() => {
    let textoAtual = '';
    let i = 0;
    const interval = setInterval(() => {
      if (i === conteudo.length) {
        clearInterval(interval);
      } else {
        textoAtual += conteudo[i];
        setTexto(textoAtual);
        i++;
      }
    }, velocidadeDigitacao);

    return () => clearInterval(interval);
  }, [conteudo, velocidadeDigitacao]);

  return (
    <section id="servicos" className="caixa d-flex justify-content-center align-items-center vh-100"> {/* vh-100 define a altura da seção como 100% da altura da viewport */}
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row albuns justify-content-center"> {/* Centralizando a linha de albuns */}
              <div className="col-md-8">
                <img src="src/assets/images/perfil.jpg" className="img-fluid rounded-circle w-100" alt="perfil" />
              </div>
            </div>
          </div>
          <div className="col-md-4 text-light d-flex align-items-center"> {/* Centralizando e alinhando verticalmente o texto */}
            <div className="text-center">
              <h2>{texto}</h2>
              <a href="" className="btn btn-lg btn-custom btn-primary">
                Mais sobre mim
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigitarTexto;
