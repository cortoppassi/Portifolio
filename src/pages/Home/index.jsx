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

const Home = () => {
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                >
                  Get in touch
                </button>
                <button
                  style={{ color: "#00a5ec", border: "solid 1px #00a5ec" }}
                >
                  Download CV
                </button>
              </div>
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
