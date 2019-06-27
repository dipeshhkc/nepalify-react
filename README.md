<h1> # Nepalify-React </h1>
<h2> Key mapping to Preeti font and Unicode </h2> 

![Alt text](https://github.com/dipesh429/Nepalify-React/blob/master/screenshot/unicode1.png)

<h2>  Usage: </h2>
   


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
