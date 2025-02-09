import React from "react";
import * as S from "./styles";
import Image from "../../assets/profile.jpeg";
const About = () => {
  return (
    <S.AboutContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <h1>About</h1>
        <h1 style={{ color: "#00a5ec" }}>Me</h1>
      </div>
      <div
        style={{
          borderLeft: "solid 2px #00a5ec",
          borderRight: "solid 2px #00a5ec",
          borderTop: "solid 1px #002c3f",
          borderBottom: "solid 1px #002c3f",
          borderRadius: "50%",
          width: "220px",
          height: "220px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={Image}
          alt=""
          style={{
            border: "solid 2px #00a5ec",
            borderRadius: "50%",
            width: "200px",
            height: "200px",
          }}
        />
      </div>
      <h2>Full Stack Developer!</h2>
      <p style={{ textAlign: "center", fontSize: "1rem", lineHeight: "1.5", maxWidth: "600px" }}>
        Como Analista Desenvolvedor na SEIDOR, sou responsável por criar
        soluções de IA para atender a diversas necessidades empresariais, com
        ênfase na entrega de qualidade e otimização de custos. Desenvolvimento e
        implementação de chatbots e assistentes virtuais, proporcionando um
        atendimento automatizado e eficiente. Gerenciamento de instâncias EC2 em
        ambientes de nuvem, com foco em escalabilidade e segurança. Automação de
        navegação através do protocolo DevTools para facilitar a interação com
        sistemas externos. Experiência em integração de APIs, otimização de
        desempenho web e implementação de novas funcionalidades para projetos de
        grande porte.
      </p>
      <button style={{ backgroundColor: "#00a5ec", color: "#081b29" }}>
        Read More
      </button>
    </S.AboutContainer>
  );
};

export default About;
