import styled from 'styled-components';

// Wrapper for the whole navbar component
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// AppBar replacement
export const AppBar = styled.nav`
 width: 100%;
  background-color: rgba(255, 255, 255, 0.1); /* Fundo transparente com leve tonalidade branca */
  position: fixed;
  z-index: 10;
  backdrop-filter: blur(10px); /* Efeito de desfoque */
  -webkit-backdrop-filter: blur(10px); /* Suporte para navegadores WebKit (Safari) */
  border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* Adiciona uma borda suave, se necessário */
`;

// Toolbar replacement
export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 64px;
`;

// Menu button for mobile
export const MenuButton = styled.button`
  background: none;
  border: none;
  color: #1b263b; //Primary color
  font-size: 1.5rem;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    cursor: pointer;
    color: #33486f; //Secondary color
  }
`;

// Desktop navigation container
export const NavDesktop = styled.div`
  display: flex;
  gap: 16px; /* Espaço entre os botões */
  margin-left: auto; /* Empurra os itens para o lado direito */
  @media (max-width: 768px) {
    display: none;
  }
`;

// Drawer (mobile menu)
export const NavDrawer = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.open ? '0' : '-100%')};
  width: 240px;
  height: 100vh;
  background-color: #b8b8b8;
  transition: left 0.3s ease-in-out;
  z-index: 20;
`;

// Drawer content container
export const DrawerContainer = styled.div`
  text-align: center;
  padding: 16px;
`;

// Divider
export const Divider = styled.hr`
  border: 1px solid #444;
  margin: 16px 0;
`;

// Navigation links list
export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// Button for both desktop and drawer navigation
export const NavButton = styled.a`
  color: #1b263b; //Primary color
  text-decoration: none;
  font-size: 1rem;
  padding: 8px 16px;
  

  &:hover {
    color: #33486f; //Secondary color
  }
`;
