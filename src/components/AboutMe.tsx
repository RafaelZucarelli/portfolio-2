import React from 'react';

const ForMe: React.FC = () => {
  return (
<section id="sobre-mim" className="d-flex justify-content-center align-items-center vh-150" style={{ backgroundColor: 'black' }}>
      <div className="container text-center mt-5 text-light">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="mb-4 text-light" style={{ fontSize: '50px' }}>SOBRE <span style={{ color: '#8a2be2'}}>MIM</span></h1>
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
          <a href="/src/assets/Rafael Alves Zucarelli - CV (1).pdf" download className="btn btn-md btn-custom-purple">
            BAIXAR CV
          </a>
        </div>
      </div>
    </div>
      </section>
        );
    }
    
    export default ForMe;
    