import styled, { css } from "styled-components";

export const AboutContainer = styled.div`
  background-color: #002c3f;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const SkillsContent = styled.div`
  width: "100vw";
  display: flex;
  flex-direction: row;
  padding: "40px";

  align-items: "center";
  justify-content: "center";

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vw;
    width: 100%;
  }
`;

export const DivRight = styled.nav`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* gap: 24px; */
  /* font-size: 1.5rem; */
  height: calc(50vh);
  width: 90%;
  border-radius: 8px;
  margin: 40px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 50%;
    margin: 16px;
  }
`;
export const DivLeft = styled.nav`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* gap: 24px; */
  /* font-size: 1.5rem; */
  height: calc(50vh);
  width: 90%;
  margin: 40px;
  border-radius: 8px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 50%;
    margin: 16px;
  }
`;
