import React from "react";

const Projects: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "black" }}
    >
      <div className="container align-self-center">
        <div className="row">
          <div
            className="col-md-12 text-center text-light text-uppercase text-justify"
            style={{ lineHeight: "1.5" }}
          >
            <h1 className="mb-4 py-4 text-center" style={{ fontSize: "50px" }}>
              <strong>
                MEU <span style={{ color: "#8a2be2" }}>PORTFÓLIO</span>{" "}
              </strong>
            </h1>

            <div className="project col-md-6 text-center">
              <a
                href="https://github.com/RafaelZucarelli/nlw-expert"
                target="_blank"
              >
                <div className="col-md-6 rounded shadow">
                  <img
                    className="img-fluid"
                    src="./src/assets/nlw-expert.gif"
                    alt="Gif da Aplicação de anotações"
                  />
                </div>
                <div className="project-info">
                  <h3>Aplicação de anotações</h3>
                  <p>
                    Projeto feito com React, TypeScript, Tailwind e a
                    SpeechRecognition API.
                  </p>
                  <p>🔗 Ver no GitHub Pages</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
