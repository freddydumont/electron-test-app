// @flow
import * as React from 'react';
// import { Switch, Route } from 'react-router';
import { Section } from 'bloomer';
// import HomePage from '../containers/HomePage';
import Nav from '../components/Navbar';
import SidebarMenu from '../components/SidebarMenu';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Section style={{ height: 'calc(100vh - 3.25rem)' }}>
          <SidebarMenu />
          <h2>App</h2>
        </Section>
      </React.Fragment>
    );
  }
}
