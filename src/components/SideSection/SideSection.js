import { useToggle } from 'hooks/useToggle';
import React from 'react';
import {
  StyledSideSection,
  SideSectionToggle,
  ToggleIcon,
  SideSectionContent,
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
    <StyledSideSection data-visibility={isOpen ? 'visible' : 'hidden'}>
      <SideSectionContent>
        <SideSectionToggle style={{ top: xAxisCoords }} onClick={onClose}>
          {ToggleIcon ? <ToggleIcon width="100%" height="100%" /> : null}
        </SideSectionToggle>
        {children}
      </SideSectionContent>
    </StyledSideSection>
  );
};

export default SideSection;
