import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const RightMenu = () => {
  const scrollToHomeSection = () => {
    const aboutSection = document.getElementById("home");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAboutSection = () => {
    const aboutSection = document.getElementById("sobre-mim");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolioSection = () => {
    const aboutSection = document.getElementById("portfolio");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContatoSection = () => {
    const aboutSection = document.getElementById("contato");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      style={{
        position: "fixed",
        top: "60%",
        right: "30px",
        transform: "translateY(-50%)",
        zIndex: "999",
      }}
    >
      <button
        onClick={scrollToHomeSection}
        className="btn btn-custom-purple btn-active mb-5 d-block rounded-circle"
        style={{ width: "50px", height: "50px" }}
      >
        <FontAwesomeIcon icon={faHome} />
      </button>

      <button
        onClick={scrollToAboutSection}
        className="btn btn-custom-purple mb-5 d-block rounded-circle"
        style={{ width: "50px", height: "50px" }}
      >
        <FontAwesomeIcon icon={faUser} />
      </button>
      <button
        onClick={scrollToPortfolioSection}
        className="btn btn-custom-purple mb-5 d-block rounded-circle"
        style={{ width: "50px", height: "50px" }}
      >
        <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: "15px" }} />
      </button>
      <button
        onClick={scrollToContatoSection}
        className="btn btn-custom-purple mb-5 d-block rounded-circle"
        style={{ width: "50px", height: "50px" }}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </button>
    </div>
  );
};

export default RightMenu;
