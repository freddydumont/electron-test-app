import React from 'react';
import { MenuLink } from 'bloomer';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ itemName, routeName }) => (
  <li>
    <MenuLink>
      <NavLink to={routeName} activeClassName="is-active">
        {itemName}
      </NavLink>
    </MenuLink>
  </li>
);

export default MenuItem;
