import styled from 'styled-components';
import { ReactComponent as Search } from 'images/magnifier.svg';

export const StyledSideSection = styled.section`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  padding: 10vh 1em;
  left: 0;
  width: 60%;
  height: 100%;
  background: ${({ theme }) => theme.surfaceBackground};
  transition: 0.5s ease;
  box-shadow: 0px 10px 10px 5px ${({ theme }) => theme.boxShadowColor};
  border-radius: 0px 0px 20px 0px;
  z-index: 1;
  &[data-visibility='hidden'] {
    left: -60%;
  }
  @media (min-width: 1280px) {
    width: 30em;
    &[data-visibility='hidden'] {
      left: -30em;
    }
  }
`;

export const SideSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  background: transparent;
`;

export const SideSectionToggle = styled.button`
  position: absolute;
  top: 0;
  right: -3em;
  height: 3em;
  width: 3em;
  padding: 0 0.5em;
  background: ${({ theme }) => theme.primaryColor};
  box-shadow: 10px 5px 10px 0 ${({ theme }) => theme.boxShadowColor};
  border-radius: 0px 20px 20px 0px;
  z-index: 2;
`;

export const ToggleIcon = styled(Search)`
  fill: ${({ theme }) => theme.fontColor};
  z-index: 2;
`;
