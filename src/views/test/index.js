import React from 'react';
import Home from '../home';
import About from '../about';

export default class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Home />
        <About />
      </React.Fragment>
    )
  }
}