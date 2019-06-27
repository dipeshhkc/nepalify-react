import React, { Component } from 'react';
import './nepali-mapping';

export class Nepali extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  calculate(e){
    let value = "";
    if(this.state.value !== e.target.value){
      for(let c of e.target.value){
        let conv_char = window[this.props.funcname](c.charCodeAt(0));
        value += conv_char || c;
      }
      this.setState({ value });
      this.props.valueChange && this.props.valueChange(e, value);
    }
  }

  render() {
    return (
      <input
        onChange={ this.calculate.bind(this) }
        value={this.state.value}
        { ...this.props }
      />
    );
  }
}

export default Nepali;
