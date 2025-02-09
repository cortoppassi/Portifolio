import React from "react";
import * as S from "./styles";

const Skills = () => {
  const codingSkills = [
    { year: "2024 - 2025", title: "Analista Desenvolvedor", description: "Focando em performance, segurança e soluções avançadas de IA para aplicações web." },
    { year: "2023 - 2024", title: "Full Stack Developer", description: "Desenvolvendo aplicações modernas com React, Node.js e boas práticas de arquitetura." },
    { year: "2022 - 2023", title: "Frontend Developer", description: "Criando interfaces intuitivas e experiências de usuário otimizadas." },
    { year: "2021 - 2022", title: "Backend Developer", description: "Construindo APIs robustas e escaláveis com foco em lógica de negócios." },
  ];
  
  const professionalSkills = [
    { year: "2024 - 2025", title: "Engenharia de Prompt e Automação", description: "Especializando-se em ferramentas de IA e automação de processos." },
    { year: "2023 - 2024", title: "Validação e Controle de Qualidade", description: "Testando e validando funcionalidades para garantir alta confiabilidade." },
    { year: "2022 - 2023", title: "Gestão de Permissões e Segurança", description: "Implementando sistemas de controle de acesso e validações centralizadas." },
    { year: "2021 - 2022", title: "Colaboração e Trabalho em Equipe", description: "Trabalhando em equipes ágeis para entregar projetos de alto impacto." },
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
