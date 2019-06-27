<h1> # nepalify-react </h1>
<h2> Key mapping to Preeti font and Unicode </h2>

![Loading1](https://drive.google.com/open?id=1HBn9ustAwzI92M1yBWMIS5EsGj_Fyc8E)
![Loading2](https://drive.google.com/open?id=1qKMa6GVqF4aSIvMmFmuZf7KCTSKztUpF)

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
