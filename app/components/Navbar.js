import React from 'react';
import { Navbar, NavbarBrand, NavbarItem, Title, Button } from 'bloomer';

const Nav = () => (
  <Navbar className="has-shadow">
    <NavbarBrand>
      <NavbarItem>
        <Title isSize={4}>Paradocs POS App</Title>
      </NavbarItem>
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
    </NavbarBrand>
  </Navbar>
);

export default Nav;
