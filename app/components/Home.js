// @flow
import React, { Component } from 'react';
import { Section } from 'bloomer';
import Nav from './Navbar';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div data-tid="container">
          <Nav />
          <Section style={{ height: 'calc(100vh - 3.25rem)' }}>
            <h2>Home</h2>
          </Section>
        </div>
      </div>
    );
  }
}
