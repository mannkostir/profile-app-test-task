import styled from 'styled-components';

export const AuthWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.mainNavBackground};
  height: 100%;
  flex: 2 1 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding-top: 4em;
  padding-bottom: 4em;
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  top: 5em;
  right: 8em;
  display: flex;
  gap: 1em;
`;

export const SignInButton = styled.button`
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.fontAccentColor};
  }
`;

export const SignUpButton = styled.button`
  background: ${({ theme }) => theme.primaryColor};
  padding: 0.5em;
  border-radius: 15px;
  box-shadow: 0 0 5px 5px ${({ theme }) => theme.boxShadowColor};
  &:hover {
    color: ${({ theme }) => theme.fontAccentColor};
  }
  &:active {
    box-shadow: none;
    box-shadow: 0 0 2px 2px ${({ theme }) => theme.boxShadowColor};
  }
`;
