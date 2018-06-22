import React from 'react';
import { Section, Tile, Box } from 'bloomer';
import SidebarMenu from './SidebarMenu';
import VisibleProducts from '../containers/VisibleProducts';

const Main = () => (
  <main>
    <Section
      style={{ height: 'calc(100vh - 3.25rem)' }}
      className="has-background-light"
    >
      <Tile isAncestor style={{ height: 'calc(100vh - 3.25rem - 72px)' }}>
        <Tile isParent>
          <Tile isSize={2} isParent>
            <Tile
              isChild
              render={props => (
                <Box {...props}>
                  <SidebarMenu />
                </Box>
              )}
            />
          </Tile>
          <Tile isSize={7} isParent>
            <Tile
              isChild
              render={props => (
                <Box {...props}>
                  <p className="menu-label">Products</p>
                  <VisibleProducts />
                </Box>
              )}
            />
          </Tile>
          <Tile isSize={3} isParent>
            <Tile
              isChild
              render={props => (
                <Box {...props}>
                  <p className="menu-label">Invoice</p>
                </Box>
              )}
            />
          </Tile>
        </Tile>
      </Tile>
    </Section>
  </main>
);

export default Main;
