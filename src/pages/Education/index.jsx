import React from "react";
import * as S from "./styles";

const Skills = () => {
  const codingSkills = [
    { year: "2023 - 2024", title: "Full Stack Developer", description: "Building modern web applications." },
    { year: "2022 - 2023", title: "Frontend Developer", description: "Specializing in UI/UX design." },
    { year: "2021 - 2022", title: "Backend Developer", description: "Creating robust APIs." },
  ];

  const professionalSkills = [
    { year: "2023 - 2024", title: "Team Leadership", description: "Leading teams to success." },
    { year: "2022 - 2023", title: "Project Management", description: "Managing agile projects." },
    { year: "2021 - 2022", title: "Problem Solving", description: "Solving complex challenges." },
  ];

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
        <h1 style={{ color: "#00a5ec" }}>Journey</h1>
      </div>

      <S.SkillsContent>
        <S.DivRight>
          <h2 style={{ margin: "4px 0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Coding Skills</h2>
          {codingSkills.map((skill, index) => (
            <S.Card key={index}>
              <h6>{skill.year}</h6>
              <h5>{skill.title}</h5>
              <p>{skill.description}</p>
            </S.Card>
          ))}
        </S.DivRight>

        <S.DivLeft>
          <h2 style={{ margin: "4px 0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Professional Skills</h2>
          {professionalSkills.map((skill, index) => (
            <S.Card key={index}>
              <h6>{skill.year}</h6>
              <h5>{skill.title}</h5>
              <p>{skill.description}</p>
            </S.Card>
          ))}
        </S.DivLeft>
      </S.SkillsContent>
    </S.AboutContainer>
  );
};

export default Skills;
