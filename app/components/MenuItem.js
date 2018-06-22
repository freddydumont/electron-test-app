import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ itemName, routeName }) => (
  <li>
    <NavLink to={routeName} activeClassName="is-active">
      {itemName}
    </NavLink>
  </li>
);

export default MenuItem;
