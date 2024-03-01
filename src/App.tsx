import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faGithub, faGit, faJs, faReact, faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';


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

  const scrollToAboutSection = () => {
    const aboutSection = document.getElementById('sobre-mim');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="servicos" className="caixa d-flex justify-content-center align-items-center vh-100">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row albuns justify-content-center">
                <div className="col-md-8">
                  <img src="src/assets/images/perfil.jpg" className="img-fluid rounded-circle w-100" alt="perfil" />
                </div>
              </div>
            </div>
            <div className="col-md-4 text-light d-flex align-items-center">
              <div className="text-center">
                <h2>{texto}</h2>
                <button onClick={scrollToAboutSection} className="btn btn-lg btn-outline-custom-purple">
                  Mais sobre mim
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-mim" className="d-flex justify-content-center align-items-center vh-150" style={{ backgroundColor: 'black' }}>
      <div className="container text-center mt-5 text-light">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="mb-4 text-light">SOBRE <span style={{ color: '#8a2be2'}}>MIM</span></h1>
          <p className="lead  text-justify">
            <strong>
            Desde muito jovem, fui atraído pela tecnologia, e foi por essa razão que escolhi ingressar na área de Sistemas de Informação. No entanto, desde o início, sempre ansiava por explorar mais profundamente o vasto e intrigante mundo da programação. Decidi transformar esse sonho em realidade, embarcando em uma jornada de estudos dedicados ao Desenvolvimento Web: <span>HTML, CSS, JavaScript e React</span>.
            </strong>
          </p>
          <p className="lead  text-justify">
          <strong>
            Com uma visão de longo prazo, no momento curso uma graduação em Sistemas de Informação e também, estou imerso em cursos de Desenvolvimento Web para aprimorar ainda mais minhas habilidades. Essa trajetória reflete meu comprometimento e determinação na transição de carreira para a área de Desenvolvimento FrontEnd, contribuindo com inovação e criatividade para a vanguarda da tecnologia.
            </strong>
          </p>
          <p className="lead  text-justify">
          <strong>
            Para além do código, e nos meus momentos de lazer, desfruto de atividades como jogar video-game, mergulhar em boas leituras e apreciar filmes e séries.
            </strong>
          </p>
          <a href="" className="btn btn-md btn-custom-purple">
                  BAIXAR CV
                </a>
        </div>
      </div>
    </div>
      </section>

      <section className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'black' }}>
  
      <div className="container align-self-center">
      <div className="row">
        <div className="col-md-12 text-center text-light text-uppercase text-justify" style={{ lineHeight: '1.5' }}>
          <h4 className='mb-4 py-4 text-center'><strong>MINHAS HABILIDADES</strong></h4>
          <div className="row skills-container text-center">
            <div className="col-md-4"> 
              <div className="technology">
                <FontAwesomeIcon icon={faReact} size="3x" />
              </div>
              <p>React</p>
            </div>
            <div className="col-md-4">
              <div className="technology">
                <FontAwesomeIcon icon={faJs} size="3x" />
                <p >JavaScript</p>
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
              <p >Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    
    <section className="d-flex justify-content-center align-items-center" style={{ backgroundColor: 'black' }}>
  
      <div className="container align-self-center">
      <div className="row">
        <div className="col-md-12 text-center text-light text-uppercase text-justify" style={{ lineHeight: '1.5' }}>
        <h4 className='display-8 mb-4 py-4 text-center'><strong>Educação</strong></h4>
        </div>
            <ul className="education">
            <div className="year text-light"> 
                    <p>
                    <span className="bullet icon-purple">
                        <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: '15px' }}/>
                        </span> 
                         2021 - Presente
                        </p>
                        </div>
                    <h5 className='text-light'> Graduação - Sistemas de Informação <span>- Faculdade Instituto Superior do Litoral do Paraná </span></h5>
                    <div className="year text-light"> 
                    <p>
                    <span className="bullet icon-purple">
                      <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: '15px' }} />
                    </span>
                    - 2024 - Presente
                  </p>
                    </div>
                    <h5 className='text-light'>Curso em Desenvolvimento Web <span>- Udemy</span></h5>
            </ul>
            </div>
            </div>
      </section>

      <section className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'black' }}>
      <div className="container align-self-center">
      <div className="row">
        <div className="col-md-12 text-center text-light text-uppercase text-justify" style={{ lineHeight: '1.5' }}>
          <h1 className='mb-4 py-4 text-center'><strong>MEU <span style={{ color: '#8a2be2' }}>PORTFÓLIO</span> </strong></h1>
          <div className='container align-self-center'>
                <div className="project col-md-12 text-center">
                    <a href="https://github.com/RafaelZucarelli/nlw-expert" target="_blank">
                        <img src="" alt="Gif da Aplicação de anotações" />
                      </a>  
                </div>
            </div>
        </div>
      </div>
    </div>
    </section>

    

        
    </>
  );
}

export default DigitarTexto;
