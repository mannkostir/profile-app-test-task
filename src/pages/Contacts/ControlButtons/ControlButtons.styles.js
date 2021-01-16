import styled from 'styled-components';
import { ReactComponent as Delete } from 'images/trash-bin.svg';
import { ReactComponent as Edit } from 'images/writing.svg';

export const ControlButtonsContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 0.5em;
  right: 1em;
  height: 60%;
  margin: auto 0;
  width: auto;
`;

export const ControlButton = styled.button`
  width: 2em;
  height: auto;
`;

export const DeleteIcon = styled(Delete)`
  &:hover {
    fill: red;
  }
`;

export const EditIcon = styled(Edit)`
  &:hover {
    fill: blue;
  }
`;
