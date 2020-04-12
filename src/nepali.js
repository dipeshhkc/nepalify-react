import React, { Component } from 'react';
import { mappingFunction } from './nepali-mapping';

const KEYCODE = {
  START_ASCII_CODE: 32,
  END_ASCII_CODE: 125
}

export class Nepali extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue || ''
    };
  }

  calculate(event) {
    event.persist();
    let keyCode = event.key.length === 1 ? event.key.charCodeAt(0): -1;
    const cursorStart = event.target.selectionStart;
    const cursorEnd = event.target.selectionEnd;

    if(event.ctrlKey || event.altKey)
      return;

    // for ASCII Characters mapping
    if(keyCode >= KEYCODE.START_ASCII_CODE && keyCode <= KEYCODE.END_ASCII_CODE){
      let convChar;
      try{
        convChar = mappingFunction[this.props.funcname](keyCode);
      }catch(e){
        convChar = String.fromCharCode(keyCode);
      }
      const oldValue = this.state.value;
      const partA = oldValue.substring(0, cursorStart) || "";
      const partB = oldValue.substring(cursorEnd, oldValue.length) || "";
  
      const value = partA + convChar + partB;
  
      this.setState({ value });
      this.adjustCursor(event);
      event.preventDefault();
      this.props.valueChange && this.props.valueChange(value);
    }

  }

  // don't override event instead let event play and then 
  // set the selection range after 10ms, bit hacky but works
  adjustCursor( {target} ) {
    const selectionStart = target.selectionStart;
    setTimeout(() => {
      target.setSelectionRange(selectionStart+1, selectionStart+1);
    }, 10);
  }

  changeHandler(event){
    console.log(event.target.value);
    const value = event.target.value;
    this.setState({ value });
    this.props.valueChange && this.props.valueChange(value);
  }

  render() {

    const { inputType, initialValue, ...props } = this.props;
    return inputType === 'textarea' ? (
      <textarea
        {...props}
        onChange={this.changeHandler.bind(this)}
        onKeyDown={this.calculate.bind(this)}
        value={this.state.value} />
    ) : (
        <input
          {...props}
          onChange={this.changeHandler.bind(this)}
          onKeyDown={this.calculate.bind(this)}
          value={this.state.value}
        />
      );

  }
}

export default Nepali;
