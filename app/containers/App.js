// @flow
import * as React from 'react';
import Nav from '../components/Navbar';
import Main from '../components/MainSection';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Main />
      </React.Fragment>
    );
  }
}
