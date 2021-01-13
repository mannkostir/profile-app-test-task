import { useToggle } from 'hooks/useToggle';
import React from 'react';
import {
  SideContainer,
  SideSectionToggle,
  ToggleIcon,
} from './SideSection.styles';

const SideSection = ({
  isOpen = false,
  onClose = () => {},
  children,
  ToggleIcon = null,
  xAxisCoords = '50vh',
  ...args
}) => {
  return (
    <SideContainer data-visibility={isOpen ? 'visible' : 'hidden'}>
      <SideSectionToggle style={{ top: xAxisCoords }} onClick={onClose}>
        {ToggleIcon ? <ToggleIcon width="auto" height="auto" /> : null}
      </SideSectionToggle>
      {children}
    </SideContainer>
  );
};

export default SideSection;
