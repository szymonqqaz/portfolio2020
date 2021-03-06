import React from 'react';

import { MenuText } from './style';
import useAnimationHook from './animationHook';

const MenuDesktopButton = () => {
  const { textWrapper } = useAnimationHook();
  return (
    <MenuText ref={textWrapper} data-testid="menuDesktopButton">
      menu
    </MenuText>
  );
};

export default MenuDesktopButton;
