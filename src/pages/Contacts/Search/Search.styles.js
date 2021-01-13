import styled from 'styled-components';
import { ReactComponent as Search } from 'images/magnifier.svg';

export const SearchToggleIcon = styled(Search)`
  fill: ${({ theme }) => theme.fontColor};
`;

export const SearchForm = styled.form`
  width: 80%;
  gap: 1.5em;
`;
