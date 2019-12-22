# Nepalify-React
React library to key map to preeti or unicode. This library provides an `<input type ="text">` input field which converts preeti or unicode typing into nepali texts. Click [here]() for preeti keyboard layout and click [here]() for unicode keyboard layout. The input and output from the library can be seen in the figure below. 

![Loading1](https://raw.githubusercontent.com/dipesh429/Nepalify-React/master/screenshot/unicode1.png)
![Loading2](https://raw.githubusercontent.com/dipesh429/Nepalify-React/master/screenshot/unicode2.png)

##### Download using npm (https://www.npmjs.com/package/nepalify-react)
- using npm install by using `npm i nepalify-react`
- using yarn install by using `yarn add nepalify-react`

#### Usage:
```
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
```

#### API Details:
| Props          | Value                                     | Default      | Description                                                                                |
|----------------|-------------------------------------------|--------------|--------------------------------------------------------------------------------------------|
| `funcname`     | `preetify` or `unicodify`                 | `unicodify`  | Which type of key mapping to use. Traditional Unicode mapping or Romanized Unicode Mapping |
| `valueChange`  | callback function. `(event, value) => {}` | `null`       | callback function to call instead of react's `onChange` function                           |
| `inputType`    | `textarea` or `text`                      | `text`       | type of the input field to apply react nepalify for                                        |
| `initialValue` | String                                    | Empty String | Set `intialValue` of input field.                                                          |

#### Note:
You can add other props as per your requirements except given in `API` which will be passed to underlying input element. 