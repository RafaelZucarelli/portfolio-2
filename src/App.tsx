import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faGithub, faGit, faJs, faReact,  faCss3 } from '@fortawesome/free-brands-svg-icons';
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
                <a href="" className="btn btn-lg btn-outline-custom-purple">
                  Mais sobre mim
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'black' }}>
        <div className="container align-self-center">
          <div className="row">
            <div className="col-md-12 text-center text-light text-uppercase text=justify" style={{ lineHeight: '1.5' }}>
              <h1 className='display-2'>SOBRE <span style={{ color: 'purple' }}>MIM</span></h1>
              <p  className='mb-6'> 
                    Desde muito jovem, fui atraído pela tecnologia, e foi por essa razão que escolhi ingressar na área de Sistemas de Informação. No entanto, desde o início, sempre ansiava por explorar mais profundamente o vasto e intrigante mundo da programação.      
                    Decidi transformar esse sonho em realidade, embarcando em uma jornada de
                    estudos dedicados ao Desenvolmento Web: <span>HTML, CSS, JavaScript e React</span>.
                </p>

                <p className='mb-6'>
                    Com uma visão de longo prazo, no momento curso uma graduação em Sistemas de Informação e também,
                    estou imerso em cursos de Desenvolvimento Web para aprimorar ainda mais minhas
                    habilidades. Essa trajetória reflete meu comprometimento e determinação na transição de carreira
                    para a área de Desenvolvimento FrontEnd, contribuindo com inovação e criatividade para a vanguarda
                    da tecnologia.
                </p >

                <p className=''>
                    Para além do código, e nos meus momentos de lazer, desfruto de
                    atividades como jogar video-game, mergulhar em boas leituras e apreciar filmes e séries.
                </p>
                <a href="" className="btn btn-lg btn-custom-purple">
                  BAIXAR CV
                </a>
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex justify-content-center align-items-center" style={{ backgroundColor: 'black' }}>
  
      <div className="container align-self-center">
      <div className="row">
        <div className="col-md-12 text-center text-light text-uppercase text-justify" style={{ lineHeight: '1.5' }}>
          <h1 className='display-7 mb-4 py-4'>MINHAS HABILIDADES</h1>
          <div className="row skills-container">
            <div className="col-md-4">
              <div className="technology">
                <FontAwesomeIcon icon={faReact} size="3x" />
              </div>
              <p className="text-center">React</p>
            </div>
            <div className="col-md-4">
              <div className="technology">
                <FontAwesomeIcon icon={faJs} size="3x" />
              </div>
              <p className="text-center">JavaScript</p>
            </div>
            <div className="col-md-4">
              <div className="technology">
                <FontAwesomeIcon icon={faCss3} size="3x" />
              </div>
              <p className="text-center">CSS</p>
            </div>
            <div className="col-md-4">
              <div className="technology">
                <FontAwesomeIcon icon={faHtml5} size="3x" />
              </div>
              <p className="text-center">HTML</p>
            </div>
            <div className="col-md-4">
              <div className="technology">
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </div>
              <p className="text-center">GitHub</p>
            </div>
            <div className="col-md-4">
              <div className="technology">
                <FontAwesomeIcon icon={faGit} size="3x" />
              </div>
              <p className="text-center">Git</p>
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
        <h1 className='display-8 mb-4 py-4'>Educação</h1>
        </div>
            <ul className="education">
                    <div className="year">
                        <p><FontAwesomeIcon icon={faBriefcase} /> 2021 - Presente</p>
                    </div>
                    <h5> Graduação - Sistemas de Informação <span>- Faculdade Instituto Superior do Litoral do Paraná </span></h5>
                    <div className="year"> 
                    <span><i className="fa-solid fa-briefcase"></i></span>
                        <p><FontAwesomeIcon icon={faBriefcase} /> 2024 - presente</p>
                    </div>
                    <h5>Curso em Desenvolvimento Web <span>- Udemy</span></h5>
            </ul>
            </div>
            </div>
            
      </section>

      {/* Adicione mais seções conforme necessário */}
    </>
  );
}

export default DigitarTexto;
