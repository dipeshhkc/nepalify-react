import React, { Component } from 'react';
import './nepali-mapping';

export class Nepali extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  calculate(e) {
    let value = '';
    console.log(e.target);
    if (this.state.value !== e.target.value) {
      for (let c of e.target.value) {
        console.log(c.charCodeAt(0));
        let conv_char = window[this.props.funcname](c.charCodeAt(0));
        value += conv_char || c;
      }
      this.setState({ value });
      this.props.valueChange && this.props.valueChange(e, value);
    }
  }

  render() {
    return (
      <div>
        <input
          onChange={this.calculate.bind(this)}
          value={this.state.value}
          {...this.props}
        />
      </div>
    );
  }
}

export default Nepali;
