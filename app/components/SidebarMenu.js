import React from 'react';
import { connect } from 'react-redux';
import { Menu, MenuLabel, MenuList } from 'bloomer';
import MenuItem from './MenuItem';
import { selectCategory } from '../actions/index';

class SidebarMenu extends React.Component {
  render() {
    // eslint-disable-next-line
    const { loading, products, activeCategory, selectCategory } = this.props;
    let component = <Menu />;
    if (!loading) {
      const menuItems = [];
      const categories = Object.keys(products);
      for (let i = 0; i < categories.length; i++) {
        menuItems.push(
          <MenuItem
            key={categories[i]}
            name={categories[i]}
            activeCategory={activeCategory}
            selectCategory={selectCategory}
          />
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

export default connect(
  ({ activeCategory, loading, products }) => ({
    activeCategory,
    loading,
    products
  }),
  { selectCategory }
)(SidebarMenu);
