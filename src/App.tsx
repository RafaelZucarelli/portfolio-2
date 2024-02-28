import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const DigitarTexto = () => {
  return (
    <section id="servicos" className="caixa d-flex justify-content-center align-items-center vh-100"> {/* vh-100 define a altura da seção como 100% da altura da viewport */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row albuns justify-content-center"> {/* Centralizando a linha de albuns */}
              <div className="col-md-6">
                <img src="src/assets/images/perfil.jpg" className="img-fluid rounded-circle w-100" alt="perfil" />
              </div>
            </div>
          </div>
          <div className="col-md-6 text-light d-flex align-items-center"> {/* Centralizando e alinhando verticalmente o texto */}
            <div className="text-center">
              <h2>Olá! Eu sou o Rafael Zucarelli, Desenvolvedor Frontend Jr.</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigitarTexto;
