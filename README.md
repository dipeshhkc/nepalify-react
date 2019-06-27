<h1> # nepalify-react </h1>
<h2> Key mapping to Preeti font and Unicode </h2>

![Loading1](https://github.com/dipesh429/Nepalify-React/blob/master/screenshot/unicode1.png)
![Loading2](https://github.com/dipesh429/Nepalify-React/blob/master/screenshot/unicode2.png)

<h2>  Usage: </h2>

    import React, { Component, Fragment } from 'react';
    import Nepali from 'nepalify-react';

    export class App extends Component {
      render() {
        return (
          <Fragment>
            <Nepali funcname="preetify" />  //For Preeti mapping
            <Nepali funcname="unicodify" />  //For Unicode mapping
          </Fragment>
        );
      }
    }
