import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from '@fortawesome/free-brands-svg-icons'; 

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

                <p className='mb-6'>
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

      <section className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'black' }}>
        <div className="container align-self-center">
          <div className="row">
            <div className="col-md-4 text-center text-light text-uppercase text-justify" style={{ lineHeight: '1.5' }}>
              <h1 className='display-7'>MINHAS HABILIDADES</h1>
              <p  className='mb-6'> 
                    
                </p>
                
            </div>
          </div>
        </div>

        <div className="container align-self-center">
          <div className="row">
            <div className="col-md-4 text-center text-light text-uppercase text=justify" style={{ lineHeight: '1.5' }}>
              <h1 className='display-7'>MINHAS HABILIDADES</h1>
              <div className="skills-container">
                <div>
                    <div className="technology">
                        <i className="fa-brands fa-react"></i>
                    </div>
                    <p>React</p>
                </div>
                <div>
                    <div className="technology">
                        <FontAwesomeIcon icon={faJs} />
                    </div>
                    
                    <p>JavaScript</p>
                    
                   
                </div>
                <div>
                    <div className="technology">
                        <i className="fa-brands fa-css3-alt"></i>
                    </div>
                    <p>CSS</p>
                </div>
                <div>
                    <div className="technology">
                        <i className="fa-brands fa-html5"></i>
                    </div>
                    <p>HTML</p>
                </div>
                <div>
                    <div className="technology">
                        <i className="fa-brands fa-github"></i>
                    </div>
                    <p>GitHub</p>
                </div>
                <div>
                    <div className="technology">
                        <i className="fa-brands fa-git-alt"></i>
                    </div>
                    <p>Git</p>
                </div>
            </div>
                
            </div>
          </div>
        </div>

        <div className="container align-self-center">
          <div className="row">
            <div className="col-md-4 text-center text-light text-uppercase text=justify" style={{ lineHeight: '1.5' }}>
              <h1 className='display-7'>MINHAS HABILIDADES</h1>
              <p  className='mb-6'> 
                   
                </p>
                
            </div>
          </div>
        </div>
      </section>


      {/* Adicione mais seções conforme necessário */}
    </>
  );
}

export default DigitarTexto;
