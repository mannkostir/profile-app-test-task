import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as ExitIcon } from 'images/exit.svg';

export const StyledMainNav = styled.header`
  position: relative;
  background: ${({ theme }) => theme.mainNavBackground};
  height: 20em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2em;
  padding: 0em 6em;
  box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.3);
  @media (min-width: 478px) {
    height: 15em;
  }
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  color: ${({ theme }) => theme.fontColor};
  text-decoration: none;
  padding-bottom: 0.7em;
  &:hover::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.fontAccentColor};
  }
  &:hover {
    color: ${({ theme }) => theme.fontAccentColor};
  }
`;

export const NavLinksList = styled.ul`
  position: absolute;
  /* NavLink bottom padding - pseudo-element's height */
  bottom: calc(0.7em - 3px);
  gap: 1em;
`;

export const SignOutButton = styled.button`
  position: absolute;
  right: 0;
  top: 2em;
  height: 2.5em;
  width: 2.5em;
  fill: ${({ theme }) => theme.fontColor};
  &:hover > * {
    fill: ${({ theme }) => theme.fontAccentColor};
  }
`;

export const SignOutIcon = styled(ExitIcon)``;
