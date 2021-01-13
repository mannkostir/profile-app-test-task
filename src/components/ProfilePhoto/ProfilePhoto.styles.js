import styled from 'styled-components';
import { ReactComponent as UserImg } from './user.svg';

export const ImgContainer = styled.div`
  border-radius: 2.5em;
  width: 8em;
  height: 6em;
  background: ${({ theme }) => theme.surfaceBackground};
  padding: 1em;
  transition: 0.2s ease;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0);
  }
`;

export const UserImage = styled(UserImg)`
  fill: ${({ theme }) => theme.primaryColor};
`;
