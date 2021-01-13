import { useState } from 'react';

export const useToggle = (initialValue = false) => {
  const [isOn, setIsOn] = useState(initialValue);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return { isOn, toggle };
};
