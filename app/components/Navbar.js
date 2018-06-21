import React from 'react';
import { Navbar, NavbarBrand, NavbarItem, Title, Button } from 'bloomer';

const Nav = () => (
  <Navbar isDisplay="flex" className="has-shadow">
    <NavbarBrand>
      <NavbarItem>
        <Title isSize={4}>Paradocs POS App</Title>
      </NavbarItem>
    </NavbarBrand>
    <NavbarItem className="ml-auto">
      <Button isColor="primary" isOutlined>
        Print
      </Button>
    </NavbarItem>
    <NavbarItem>
      <Button isColor="primary" isOutlined>
        Review
      </Button>
    </NavbarItem>
  </Navbar>
);

export default Nav;
