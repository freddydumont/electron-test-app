// @flow
import React, { Component } from 'react';
import Nav from './Navbar';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div data-tid="container">
          <Nav />
          <h2>Home</h2>
        </div>
      </div>
    );
  }
}
