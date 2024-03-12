import React from "react";

const Projects: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="py-5"
      style={{ backgroundColor: "black" }}
    >
      <div className="container">
        <h1 className="text-center text-light mb-5">
          <strong>
            MEU <span style={{ color: "#8a2be2" }}>PORTFÓLIO</span>
          </strong>
        </h1>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="rounded shadow">
              <a
                href="https://github.com/RafaelZucarelli/nlw-expert"
                target="_blank"
              >
                <img
                  className="img-fluid rounded"
                  src="./src/assets/nlw-expert.gif"
                  alt="Gif da Aplicação de anotações"
                />
              </a>
              <div className="project-info text-light text-center">
                <h4>Aplicação de anotações</h4>
                <p>
                  Projeto feito com React, TypeScript, Tailwind e a
                  SpeechRecognition API.
                </p>
                <a href="https://github.com/RafaelZucarelli/nlw-expert">
                  🔗 Ver no GitHub Pages
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="rounded shadow">
              <a
                href="https://github.com/RafaelZucarelli/APP-ORCAMENTO-PESSOAL-ES6"
                target="_blank"
              >
                <img
                  className="img-fluid rounded"
                  src="./src/assets/orcpessoal.gif"
                  alt="Gif da aplicação de orçamento pessoal"
                />
              </a>
              <div className="project-info text-light text-center">
                <h4>Aplicação de orçamento pessoal</h4>
                <p>Projeto desenvolvido com ES6 e Bootstrap.</p>
                <a href="https://rafaelzucarelli.github.io/APP-ORCAMENTO-PESSOAL-ES6/index.html">
                  🔗 Acesse a aplicação clicando aqui
                </a>
                <br />
                <a href="https://github.com/RafaelZucarelli/APP-ORCAMENTO-PESSOAL-ES6">
                  🔗 Ver no GitHub Pages
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="rounded shadow">
              <a
                href="https://github.com/RafaelZucarelli/CALCULADORA-BASICA/blob/main/index.html"
                target="_blank"
              >
                <img
                  className="img-fluid rounded"
                  src="./src/assets/calculadora.gif"
                  alt="Gif da aplicação calculadora"
                />
              </a>
              <div className="project-info text-light text-center">
                <h4>Aplicação de Calculadora</h4>
                <p>Projeto desenvolvido com HTML, CSS e JavaScript.</p>
                <a href="https://github.com/RafaelZucarelli/CALCULADORA-BASICA/blob/main/index.html">
                  🔗 Ver no GitHub Pages
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
