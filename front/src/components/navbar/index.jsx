import React, { useState } from 'react';
import Link from 'next/link';
import * as S from './styles';

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <S.DrawerContainer onClick={handleDrawerToggle}>
      <S.Divider />
      <S.NavList>
        <Link href="/home" passHref>
          <S.NavButton>Home</S.NavButton>
        </Link>
        <Link href="/about" passHref>
          <S.NavButton>About</S.NavButton>
        </Link>
      </S.NavList>
    </S.DrawerContainer>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <S.NavWrapper>
      <S.AppBar>
        <S.Toolbar>
          <S.MenuButton onClick={handleDrawerToggle}>
            ☰
          </S.MenuButton>
          <S.Title>JC</S.Title>
          <S.NavDesktop>
            <Link href="/home" passHref>
              <S.NavButton>Home</S.NavButton>
            </Link>
            <Link href="/about" passHref>
              <S.NavButton>About</S.NavButton>
            </Link>
          </S.NavDesktop>
        </S.Toolbar>
      </S.AppBar>
      <S.NavDrawer
        container={container}
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </S.NavDrawer>
    </S.NavWrapper>
  );
};

export default Navbar;
