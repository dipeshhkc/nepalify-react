import { mappingFunction } from './nepali-mapping';
import * as React from 'react';

const KEYCODE = {
  START_ASCII_CODE: 32,
  END_ASCII_CODE: 125
}

interface INepaliProps {
  initialValue: string,
  value: string,
  inputType: "textarea" | "text",
  valueChange: (event: any, value: string) => {},
  funcname: "preetify" | "unicodify"
}

interface INepaliState {
  value: string
}

/**
 * **Nepali input component** (main component)
 * 
 * Props are:
 * - `funcname`  String
 * - `valueChange`  (evt, value) => {}
 * - `inputType` String (`textarea`/`text`)
 * - `initialValue` String
 */
export class Nepali extends React.Component<INepaliProps, INepaliState> {

  state = {
    value: this.props.initialValue || this.props.value || ''
  }

  componentDidUpdate(prevProps:INepaliProps){
    if(prevProps.value !== this.props.value){
      this.setState({
        value: this.props.value
      });
    }
  }

  /**
   * Calculate the key mappings and then set the state accordingly
   */
  calculate = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.persist();
    let keyCode = event.key.length === 1 ? event.key.charCodeAt(0) : -1;
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const cursorStart = target.selectionStart;
    const cursorEnd = target.selectionEnd;

    if (event.ctrlKey || event.altKey)
      return;

    // for ASCII Characters mapping
    if (keyCode >= KEYCODE.START_ASCII_CODE && keyCode <= KEYCODE.END_ASCII_CODE) {
      let convChar;
      try {
        convChar = mappingFunction(this.props.funcname)(keyCode);
      } catch (e) {
        convChar = String.fromCharCode(keyCode);
      }
      const oldValue = this.state.value;
      const partA = oldValue.substring(0, cursorStart) || "";
      const partB = oldValue.substring(cursorEnd, oldValue.length) || "";

      const value = partA + convChar + partB;

      this.setState({ value });
      this.adjustCursor(event);
      event.preventDefault();
      this.props.valueChange && this.props.valueChange(event, value);
    }

  }

  
  /**
   * don't override event instead let event play and then 
   * set the selection range after 10ms, bit hacky but works
   */
  adjustCursor = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const selectionStart = target.selectionStart;
    
    setTimeout(() => {
      target.setSelectionRange(selectionStart + 1, selectionStart + 1);
    }, 10);
  }

  changeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value;
    this.setState({ value });
    this.props.valueChange && this.props.valueChange(event, value);
  }

  render = () => {
    const { inputType, initialValue, value, valueChange, ...props } = this.props;
    return inputType === 'textarea' ?
      <textarea
        {...props}
        onChange={this.changeHandler}
        onKeyDown={this.calculate}
        value={this.state.value} />
      :
      <input
        {...props}
        onChange={this.changeHandler}
        onKeyDown={this.calculate}
        value={this.state.value}
      />
      ;

  }

}

export default Nepali;
