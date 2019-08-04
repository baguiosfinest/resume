import React, { Component } from 'react';
import './Input.scss';
import { handleInput } from '../../utils/utils';

export default class Input extends Component {

  componentDidMount() {
    handleInput.init();
  }

  render() {
    const name = this.props.name;
    const type = this.props.type;
    const additional_class = this.props.additional_class;
    return (
      <div className={ (additional_class) ? `input__field input__field--${additional_class}` : 'input__field' }>
        <input className="input__field_input" type={ type } placeholder="" />
        <label>{ name }</label>
        <span className="focus-border"></span>
      </div>
    )
  }
}
