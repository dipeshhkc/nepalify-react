<h1> # Nepalify-React
Key mapping to Preeti font and Unicode </h1>

Usage:

import React, { Component, Fragment } from 'react';
import Nepali from 'location of nepali.js';

export class Hello extends Component {
  render() {
    return (
      <Fragment>
        <Nepali funcname="preetify" /> //For Preeti mapping
        <Nepali funcname="unicodify" /> //For Unicode mapping
      </Fragment>
    );
  }
}
