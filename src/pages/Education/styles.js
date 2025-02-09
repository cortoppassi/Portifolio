import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #081b29;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const SkillsContent = styled.div`
  display: flex;
  flex-direction: row;
  /* padding: 40px; */
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

export const DivRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
  padding: 16px;
  gap: 24px;
`;

export const DivLeft = styled(DivRight)``;

export const Card = styled.div`
  border: solid 1px #00a5ec;
  border-radius: 8px;
  padding: 16px;
  background-color: #01374d;
  width: 100%;
  height: auto;

  h6 {
    margin: 0 0 8px 0;
    font-size: 14px;
    color: #00d1ff;
  }

  h5 {
    margin: 0 0 8px 0;
    font-size: 16px;
    color: #ffffff;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #c0c0c0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
