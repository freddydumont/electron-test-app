import React from 'react';
import { connect } from 'react-redux';
import { Section, Tile, Box, Button } from 'bloomer';
import SidebarMenu from './SidebarMenu';
import VisibleProducts from '../containers/VisibleProducts';
import Totals from '../containers/Totals';
import InvoiceTable from './InvoiceTable';
import { resetInvoice } from '../actions/index';

const Main = ({ dispatch }) => (
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
                  <Tile
                    isParent
                    isVertical
                    style={{ minHeight: '100%', paddingTop: 0 }}
                  >
                    <div
                      className="is-flex"
                      style={{ justifyContent: 'space-between' }}
                    >
                      <p className="menu-label">Invoice</p>
                      <Button
                        isSize="small"
                        onClick={() => dispatch(resetInvoice())}
                      >
                        Reset
                      </Button>
                    </div>
                    <Tile isChild style={{ minHeight: '66.666666%' }}>
                      <InvoiceTable />
                    </Tile>
                    <Tile isChild style={{ height: '33.333333%' }}>
                      <p className="menu-label">Totals</p>
                      <Totals />
                    </Tile>
                  </Tile>
                </Box>
              )}
            />
          </Tile>
        </Tile>
      </Tile>
    </Section>
  </main>
);

export default connect()(Main);
