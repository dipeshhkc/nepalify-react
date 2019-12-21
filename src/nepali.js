import React, { Component } from 'react';
import { mappingFunction } from './nepali-mapping';

export class Nepali extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue || ''
    };
  }

  calculate(e) {
    let value = "";
    e.persist();
    if (this.state.value !== e.target.value) {
      for (let c of e.target.value) {
        let conv_char = mappingFunction[this.props.funcname](c.charCodeAt(0));
        value += conv_char || c;
      }
      this.setState({ value });
      this.adjustCursor(e.target);
      this.props.valueChange && this.props.valueChange(e, value);
    }
  }

  adjustCursor(inputRef) {
    const selectionStart = inputRef.selectionStart;
    // don't override event instead let event play and then 
    // set the selection range after 10ms, bit hacky but works
    setTimeout(() => {
      inputRef.setSelectionRange(selectionStart, selectionStart);
    }, 10);
  }

  render() {
    const { inputType, ...props } = this.props;
    return inputType === 'textarea' ? (
      <textarea
        {...props}
        onChange={this.calculate.bind(this)}
        value={this.state.value} ></textarea>
    ) : (
        <input
          {...props}
          onChange={this.calculate.bind(this)}
          value={this.state.value}
        />
      );
  }
}

export default Nepali;
