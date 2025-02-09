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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button style={{ backgroundColor: "#00a5ec", color: "#081b29" }}>
        Read More
      </button>
    </S.AboutContainer>
  );
};

export default About;
