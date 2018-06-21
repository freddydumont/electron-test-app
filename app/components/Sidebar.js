import React from 'react';
import { Menu, MenuLabel, MenuList, MenuLink } from 'bloomer';

const Sidebar = ({ categories }) => (
  <Menu>
    <MenuLabel>Categories</MenuLabel>
    <MenuList>
      {Object.keys(categories).map(name => (
        <li>
          <MenuLink>{name}</MenuLink>
        </li>
      ))}
    </MenuList>
  </Menu>
);

export default Sidebar;
