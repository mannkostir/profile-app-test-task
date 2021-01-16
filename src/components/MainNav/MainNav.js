import Container from 'components/Container';
import ProfilePhoto from 'components/ProfilePhoto';
import { useAuthContext } from 'context/AuthContext/useAuthContext';
import { useAPI } from 'hooks/useAPI';
import React, { useState } from 'react';
import {
  NavLinksList,
  SignOutButton,
  SignOutIcon,
  StyledMainNav,
  StyledNavLink,
} from './MainNav.styles';

const MainNav = () => {
  const api = useAPI();
  const { signOut, isAuthenticated } = useAuthContext();

  const handleSignOut = async () => {
    await api.signOut();
    signOut();
  };

  return (
    <StyledMainNav data-isvisible={isAuthenticated}>
      <Container>
        <ProfilePhoto />
        <NavLinksList>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
        </NavLinksList>
        <SignOutButton onClick={handleSignOut}>
          <SignOutIcon height="100%" width="100%" />
        </SignOutButton>
      </Container>
    </StyledMainNav>
  );
};

export default MainNav;
