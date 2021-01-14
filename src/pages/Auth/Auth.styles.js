import styled from 'styled-components';

export const AuthWrapper = styled.div`
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
