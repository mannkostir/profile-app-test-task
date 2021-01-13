import styled from 'styled-components';
import { ReactComponent as Delete } from 'images/trash-bin.svg';
import { ReactComponent as Edit } from 'images/writing.svg';

export const StyledContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 35em;
  gap: 2em;
`;

export const ContactsListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
`;

export const ContactsItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2.5em;
  cursor: pointer;
  background: ${({ theme }) => theme.surfaceBackground};
  box-shadow: 0px 10px 10px 5px ${({ theme }) => theme.boxShadowColor};
  border-radius: 15px;
  &:hover {
    background: ${({ theme }) => theme.surfaceAccentBackground};
  }
`;
