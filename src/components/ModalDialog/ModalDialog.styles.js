import styled from 'styled-components';
import { ReactComponent as Close } from 'images/close.svg';

export const StyledDialog = styled.div`
  position: fixed;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.surfaceBackground};
  color: ${({ theme }) => theme.fontColor};
  z-index: 1;
  padding: 5%;
  /* min-height: 30%;
  min-width: 30%; */
  max-height: 100vh;
  max-width: 100vw;
  border-radius: 5%;
  box-shadow: 0 0 10px 4px ${({ theme }) => theme.boxShadowColor};
`;

export const CloseDialogButton = styled.button`
  position: absolute;
  right: 5%;
  top: 5%;
  width: 2em;
  height: 2em;
  fill: ${({ theme }) => theme.fontColor};
  :hover {
    fill: ${({ theme }) => theme.primaryColor};
  }
`;

export const CloseDialogIcon = styled(Close)``;
