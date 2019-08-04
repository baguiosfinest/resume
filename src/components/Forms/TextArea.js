import React, { Component } from 'react';
import './Input.scss';
import { handleInput } from '../../utils/utils';

export default class TextArea extends Component {

  componentDidMount() {
    handleInput.init();
  }

  render() {
    const name = this.props.name;
    const additional_class = this.props.additional_class;
    return (
      <div className={ (additional_class) ? `input__field input__field--${additional_class}` : 'input__field' }>
        <textarea className="input__field_input"></textarea>
        <label>{ name }</label>
        <span className="focus-border"></span>
      </div>
    )
  }
}
