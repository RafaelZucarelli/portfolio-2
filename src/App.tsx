import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faGithub,
  faGit,
  faJs,
  faReact,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Projects from "./components/Projects";
import BottonMoreForMe from "./BottonMoreForMe";

const DigitarTexto = () => {
  const [texto, setTexto] = useState("");
  const conteudo = "Olá! Eu sou o Rafael Zucarelli, Desenvolvedor Frontend Jr.";
  const velocidadeDigitacao = 100; // Velocidade de digitação em milissegundos

  useEffect(() => {
    let textoAtual = "";
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
    <>
      <section
        id="servicos"
        className="caixa d-flex justify-content-center align-items-center vh-100"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row albuns justify-content-center">
                <div className="col-md-8">
                  <img
                    src="src/assets/images/perfil.jpg"
                    className="img-fluid rounded-circle w-100"
                    alt="perfil"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 text-light d-flex align-items-center">
              <div className="text-center">
                <h2>{texto}</h2>
                <BottonMoreForMe />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutMe />

      <section
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: "black" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div
              className="col-md-12 text-center text-light text-uppercase text-justify"
              style={{ lineHeight: "1.5" }}
            >
              <h4 className="mb-2 py-4 text-center mt-4">
                <strong>MINHAS HABILIDADES</strong>
              </h4>
              <div className="row skills-container text-center">
                <div className="col-md-4 mb-4">
                  <div className="technology">
                    <FontAwesomeIcon icon={faReact} size="3x" />
                  </div>
                  <p>React</p>
                </div>
                <div className="col-md-4">
                  <div className="technology">
                    <FontAwesomeIcon icon={faJs} size="3x" />
                    <p>JavaScript</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="technology">
                    <FontAwesomeIcon icon={faCss3} size="3x" />
                  </div>
                  <p>CSS</p>
                </div>
                <div className="col-md-4">
                  <div className="technology">
                    <FontAwesomeIcon icon={faHtml5} size="3x" />
                  </div>
                  <p>HTML</p>
                </div>
                <div className="col-md-4">
                  <div className="technology">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                  </div>
                  <p>GitHub</p>
                </div>
                <div className="col-md-4">
                  <div className="technology">
                    <FontAwesomeIcon icon={faGit} size="3x" />
                  </div>
                  <p>Git</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Education />

      <Projects />

      <section
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: "black" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div
              className="col-md-12 text-center text-light text-uppercase text-justify"
              style={{ lineHeight: "1.5" }}
            >
              <h1
                className="mb-4 py-4 text-center"
                style={{ fontSize: "60px" }}
              >
                <strong>
                  ME <span style={{ color: "#8a2be2" }}>ENCONTRE</span>{" "}
                </strong>
              </h1>
            </div>
            <div className="get-in-touch text-light text-center">
              <p className="">
                Sinta-se à vontade para entrar em contato comigo.{" "}
              </p>
              <div className="email-container">
                <p>
                  ME ENVIE UM{" "}
                  <a href="mailto:zucarelli83@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} /> e-mail
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DigitarTexto;
