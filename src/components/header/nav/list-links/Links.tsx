import React, { FunctionComponent } from 'react';

import { HeaderNavItem } from '../Item/Item';

export const HeaderNavListLinks: FunctionComponent<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <ul>
      <HeaderNavItem onClick={onClick} to="home" i="home-outline">
        Home
      </HeaderNavItem>
      <HeaderNavItem onClick={onClick} to="about" i="person-outline">
        Sobre mi
      </HeaderNavItem>
      <HeaderNavItem onClick={onClick} to="portfolio" i="folder-outline">
        Proyectos
      </HeaderNavItem>
    </ul>
  );
};
