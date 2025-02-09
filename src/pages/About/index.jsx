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
      <p
        style={{
          textAlign: "center",
          fontSize: "1rem",
          lineHeight: "1.5",
          maxWidth: "600px",
        }}
      >
        As a Developer Analyst at SEIDOR, I am responsible for creating AI
        solutions to meet various business needs, with an emphasis on quality
        delivery and cost optimization. Development and implementation of
        chatbots and virtual assistants, providing automated and efficient
        service. Management of EC2 instances in cloud environments, focusing on
        scalability and security. Navigation automation through the DevTools
        protocol to facilitate interaction with external systems. Experience in
        integrating APIs, optimizing web performance and implementing new
        features for large projects.
      </p>
      <button style={{ backgroundColor: "#00a5ec", color: "#081b29" }}>
        Read More
      </button>
    </S.AboutContainer>
  );
};

export default About;
