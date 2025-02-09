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
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React (Hooks, Context API, State Management)</li>
              <li>Node.js & Express</li>
              <li>TypeScript</li>
              <li>Jest & Testing (Unit Tests, Integration Tests, Mocks)</li>
              <li>SQL & Sequelize</li>
              <li>Performance Optimization in JavaScript</li>
            </ul>
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
            <ul>
              <li>Computer Science Degree (2019)</li>
              <li>AI Integration in Applications</li>
              <li>Software Architecture & Design Patterns (SOLID, MVC)</li>
              <li>Project Management (Agile, Scrum)</li>
              <li>Team Collaboration (Remote Work)</li>
              <li>Continuous Learning & Improvement</li>
            </ul>
          </div>
        </S.DivLeft>
      </S.SkillsContent>
    </S.AboutContainer>
  );
};

export default Skills;
