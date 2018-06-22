import React from 'react';
import { Section, Tile, Box } from 'bloomer';
import SidebarMenu from './SidebarMenu';
import VisibleProducts from '../containers/VisibleProducts';
import InvoiceTable from './InvoiceTable';

const Main = () => (
  <main>
    <Section
      style={{ minHeight: 'calc(100vh - 3.25rem)' }}
      className="has-background-light"
    >
      <Tile isAncestor style={{ height: 'calc(100vh - 3.25rem - 72px)' }}>
        <Tile isParent>
          {/* SIDEBAR */}
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
          {/* PRODUCTS */}
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
          {/* INVOICE */}
          <Tile isSize={3} isParent>
            <Tile
              isChild
              render={props => (
                <Box {...props}>
                  <p className="menu-label">Invoice</p>
                  <InvoiceTable />
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
