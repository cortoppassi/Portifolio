import React from "react";
import * as S from "./styles";
import Image from "../../assets/827e2692-b355-4a8c-b767-4e63ef7a5b6d-Photoroom.png";
import { IoMdMenu } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import About from "../About";
import Education from "../Education";
import Skills from "../Skills";
import Contact from "../Contact";
import Logo from "../../assets/main-logo-white-transparent.png";
import ChatBot from "../../components/ChatBot";
import Resume from "../../assets/atualizadojonathanCV - Copia.pdf";
import { RiLinkedinFill, RiInstagramLine } from "react-icons/ri";
const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Curriculo-Jonathan.pdf";
    link.click();
  };

  return (
    <>
      <ChatBot />
      <div id="home">
        <S.NavbarContainer>
          <S.NavbarLeft>
            <S.NavbarLogo src={Logo} alt="Logo" />
          </S.NavbarLeft>
          <S.NavbarRight>
            <S.NavbarLink href="#home">Home</S.NavbarLink>
            <S.NavbarLink href="#about">About</S.NavbarLink>
            <S.NavbarLink href="#education">Education</S.NavbarLink>
            <S.NavbarLink href="#skills">Skills</S.NavbarLink>
            <S.NavbarLink href="#contact">Contact</S.NavbarLink>
            <S.NavbarMenu>
              <IoMdMenu />
            </S.NavbarMenu>
          </S.NavbarRight>
        </S.NavbarContainer>

        <S.HomeContainer>
          <S.HomeContent>
            <div
              style={{
                justifyContent: "center",
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
                margin: "0 ",
              }}
            >
              <h1>Hi, I´m John Cortoppassi</h1>
              <h2 style={{ color: "#00a5ec" }}>Full Stack Developer</h2>
              <p>
                Currently, I work as a Developer Analyst at SEIDOR, where I am
                responsible for developing advanced solutions in Artificial
                Intelligence, focusing on meeting needs businesses with high
                quality and cost efficiency.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                }}
              >
                <button
                  style={{ backgroundColor: "#00a5ec", color: "#081b29" }}
                  onClick={() => {
                    document.querySelector("#contact").scrollIntoView({
                      behavior: "smooth", // Adiciona o scroll suave
                      block: "start", // Alinha ao início da seção
                    });
                  }}
                >
                  Get in touch
                </button>
                <button
                  onClick={handleDownload}
                  style={{ color: "#00a5ec", border: "solid 1px #00a5ec" }}
                >
                  Download CV
                </button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "16px",
                position: "absolute",
                bottom: "20px",
                left: "130px",
                zIndex: "100",
                color: "#00a5ec",
              }}
            >
              <a href="https://www.instagram.com/john_cortoppassi/" target="_blank" rel="noopener noreferrer">
              <RiInstagramLine
                style={{ border: "solid 1px #00a5ec", borderRadius: "50%", width: "32px", height: "32px", padding: "8px"}}
              />
              </a>
              <a href="https://www.linkedin.com/in/johncortoppassi/" target="_blank" rel="noopener noreferrer">
              <RiLinkedinFill
               style={{ border: "solid 1px #00a5ec", borderRadius: "50%", width: "32px", height: "32px", padding: "8px"}}
              />
              </a>
            </div>
          </S.HomeContent>
          <S.HomeImage src={Image} alt="Home"></S.HomeImage>
        </S.HomeContainer>
      </div>

      <section id="about">
        <About />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <S.FooterContainer>
        <S.FooterLink href="#home">
          <FaArrowUp />
        </S.FooterLink>
      </S.FooterContainer>
    </>
  );
};

export default Home;
