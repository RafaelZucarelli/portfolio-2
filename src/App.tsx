import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Projects from "./components/Projects";
import BottonMoreForMe from "./components/BottonMoreForMe";
import RightMenu from "./components/RightMenu";
import Contato from "./components/Contato";
import Skills from "./components/Skills";

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
      <RightMenu />
      <section
        id="home"
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
      <Skills />
      <Education />
      <Projects />
      <Contato />
      <Footer />
    </>
  );
};

export default DigitarTexto;
