import React from "react";
import * as S from "./styles";

const Skills = () => {
  return (
    <S.AboutContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          height: "200px",
        }}
      >
        <h1>My</h1>
        <h1 style={{ color: "#00a5ec" }}>Skills</h1>
      </div>

      <S.SkillsContent
        style={{
          width: "100%",
        }}
      >
        <S.DivRight>
          <h2
            style={{
              width: "70%",
              height: "30px",
              padding: "8px",
              margin: "0",
            }}
          >
            Coding Skills
          </h2>
          <div
            style={{
              border: "solid 1px #00a5ec",
              borderRadius: "8px",
              padding: "8px",
              height: "90%",
              width: "90%",
            }}
          >
            <p>Computer Science - 2019</p>
          </div>
        </S.DivRight>
        <S.DivLeft>
          <h2
            style={{
              width: "70%",
              height: "30px",
              padding: "8px",
              margin: "0",
            }}
          >
            Professional Skills
          </h2>
          <div
            style={{
              border: "solid 1px #00a5ec",
              borderRadius: "8px",
              padding: "8px",
              height: "90%",
              width: "90%",
            }}
          >
            <p>Computer Science - 2019</p>
          </div>
        </S.DivLeft>
      </S.SkillsContent>
    </S.AboutContainer>
  );
};

export default Skills;
