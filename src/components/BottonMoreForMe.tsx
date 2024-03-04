import React from "react";

const BottonMoreForMe: React.FC = () => {
  const scrollToAboutSection = () => {
    const aboutSection = document.getElementById("sobre-mim");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToAboutSection}
      className="btn btn-lg btn-custom-purple"
    >
      Mais sobre mim
    </button>
  );
};

export default BottonMoreForMe;
