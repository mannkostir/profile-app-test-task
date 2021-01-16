import React from 'react';
import { StyledErrorMessage } from './ErrorMessage.styles';

const ErrorMessage = ({ children, style, ...args }) => {
  return (
    <StyledErrorMessage
      style={
        children?.length ? { display: 'inline-block' } : { display: 'none' }
      }
      {...args}
    >
      {children}
    </StyledErrorMessage>
  );
};

export default ErrorMessage;
