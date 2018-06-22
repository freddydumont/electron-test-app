import React from 'react';
import { MenuLink } from 'bloomer';

const MenuItem = ({ name, activeCategory, selectCategory }) => (
  <li>
    <MenuLink
      role="button"
      isActive={name === activeCategory}
      onClick={() => selectCategory(name)}
    >
      {name}
    </MenuLink>
  </li>
);

export default MenuItem;
