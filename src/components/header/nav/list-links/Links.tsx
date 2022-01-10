import React from 'react';
import { HeaderNavItem } from '../Item/Item';

export const HeaderNavListLinks = () => {
  return (
    <ul>
      <HeaderNavItem to="home" i="home-outline">
        Home
      </HeaderNavItem>
      <HeaderNavItem to="about" i="person-outline">
        Sobre mi
      </HeaderNavItem>
      <HeaderNavItem to="portfolio" i="folder-outline">
        Proyectos
      </HeaderNavItem>
    </ul>
  );
};
