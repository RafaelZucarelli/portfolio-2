import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contato: React.FC = () => {
  return (
    <section
      id="contato"
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "black" }}
    >
      <div className="container align-self-center">
        <div className="row">
          <div
            className="col-md-12 text-center text-light text-uppercase text-justify"
            style={{ lineHeight: "1.5" }}
          >
            <h1 className="mb-4 py-4 text-center" style={{ fontSize: "60px" }}>
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
  );
};

export default Contato;
