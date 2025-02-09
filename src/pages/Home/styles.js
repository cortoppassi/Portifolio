import styled, { css } from "styled-components";

export const HomeContainer = styled.div`
min-width: 700px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: calc( 100vh - 50px );
  width: 100%;

  /* @media (max-width: 768px) {
     height: 100vh;
  } */
`;

export const HomeContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 8rem;
  width: 50%;
  height: 100%;


`;

export const HomeImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: auto;

  @media (max-width: 768px) {
     display: none;
  }
`;


export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 100%;
`;
export const FooterContainer = styled.div`
  background-color: #002c3f;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 100%;
`;

export const NavbarLogo = styled.img`
  color: #fff;
  width: 50px;
  height: 50px;
`;

export const NavbarRight = styled.nav`
  display: flex;
  justify-content: end;
  font-size: 1.5rem;
  height: auto;
  width: calc(50% - 20px);
  margin-right: 40px;
`;
export const NavbarLeft = styled.nav`
  display: flex;
  height: auto;
  width: 50%;
  margin-top: 40px;
  margin-left: 20px;
`;

export const NavbarLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    scale: 1.1;
    transition: all 0.7s ease;
    color: #fff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: solid 1px #fff;
  border-radius: 8px;

  &:hover {
    scale: 1.1;
    transition: all 0.7s ease;
    color: #fff;
  }
`;
export const NavbarMenu = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    scale: 1.1;
    transition: all 0.7s ease;
    color: #fff;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
