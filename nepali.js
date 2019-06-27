import React, { Component } from 'react';
import './nepali-mapping';
import TextField from '@material-ui/core/TextField';

export class nepali extends Component {
  state = {
    value: ''
  };

  KeyPress(e) {
    let key = e.which;
    let a = window[this.props.funcname](e.which);
    this.setState(prev => {
      return {
        value: prev.value + a
      };
    });
  }

  KeyDown(e) {
    if (e.key == 'Backspace') {
      this.setState(prev => {
        return {
          value: prev.value.substring(0, prev.value.length - 1)
        };
      });
    }
  }

  render() {
    return (
      <TextField
        id="outlined-name"
        label={this.props.funcname}
        value={this.state.value}
        onKeyPress={e => this.KeyPress(e)}
        onKeyDown={e => this.KeyDown(e)}
        margin="normal"
        variant="outlined"
      />
    );
  }
}

export default nepali;
