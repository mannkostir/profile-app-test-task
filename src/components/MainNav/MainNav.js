import Container from 'components/Container';
import ProfilePhoto from 'components/ProfilePhoto';
import { useAuthContext } from 'context/AuthContext/useAuthContext';
import React from 'react';
import {
  NavLinksList,
  SignOutButton,
  SignOutIcon,
  StyledMainNav,
  StyledNavLink,
} from './MainNav.styles';

const MainNav = () => {
  const { signOut } = useAuthContext();

  return (
    <StyledMainNav>
      <Container>
        <ProfilePhoto />
        <NavLinksList>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
        </NavLinksList>
        <SignOutButton onClick={signOut}>
          <SignOutIcon height="auto" width="auto" />
        </SignOutButton>
      </Container>
    </StyledMainNav>
  );
};

export default MainNav;
