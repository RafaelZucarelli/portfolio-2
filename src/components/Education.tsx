import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';


const Education: React.FC = () => {
  return (
<section className="d-flex justify-content-center align-items-center" style={{ backgroundColor: 'black' }}>
      <div className="container align-self-center">
      <div className="row">
        <div className="col-md-12 text-center text-light text-uppercase text-justify" style={{ lineHeight: '1.5' }}>
        <h4 className='display-8 mb-4 py-4 text-center mt-4'><strong>Educação</strong></h4>
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
                    <h5 className='text-light mb-4'> Graduação - Sistemas de Informação <span>- Faculdade Instituto Superior do Litoral do Paraná </span></h5>
                    <div className="year text-light "> 
                    <p>
                    <span className="bullet icon-purple mb-4">
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
      );
    }
    
    export default Education;