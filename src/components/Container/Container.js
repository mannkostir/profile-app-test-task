import React from 'react';
import { StyledContainer } from './Container.styles';

const Container = ({ children, ...args }) => {
  return <StyledContainer {...args}>{children}</StyledContainer>;
};

export default Container;
