import styled from 'styled-components';

export const ContactsWrapper = styled.div`
  background: ${({ theme }) => theme.background};
  height: 100%;
  flex: 2 1 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 4em;
  padding-bottom: 4em;
`;
