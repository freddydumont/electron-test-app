import React from 'react';
import { connect } from 'react-redux';
import { Menu, MenuLabel, MenuList } from 'bloomer';
import MenuItem from './MenuItem';

class SidebarMenu extends React.Component {
  render() {
    const { loading, routes } = this.props;
    let component = <Menu className="is-loading" />;
    if (!loading) {
      const menuItems = [];
      // eslint-disable-next-line
      for (const [name, routeName] of Object.entries(routes)) {
        menuItems.push(
          <MenuItem key={routeName} itemName={name} routeName={routeName} />
        );
      }

      component = (
        <Menu>
          <MenuLabel>Categories</MenuLabel>
          <MenuList>{menuItems}</MenuList>
        </Menu>
      );
    }

    return component;
  }
}

export default connect(({ routes, loading, location }) => ({
  routes,
  loading,
  location
}))(SidebarMenu);
