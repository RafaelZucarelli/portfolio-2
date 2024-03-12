import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faGithub,
  faGit,
  faJs,
  faReact,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

const Skills: React.FC = () => {
  return (
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
            <h3 className="mb-2 py-4 text-center mt-4">
              <strong>MINHAS HABILIDADES</strong>
            </h3>
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
  );
};
export default Skills;
