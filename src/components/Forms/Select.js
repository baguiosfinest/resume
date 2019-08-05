import React, { Component } from 'react';
import './Input.scss';
import { handleInput } from '../../utils/utils';

export default class Select extends Component {

  componentDidMount() {
    handleInput.init();
  }

  render() {
    const { options, label, def } = this.props;

    return (
      <div className="select__wrapper">
        <label>{ label }</label>
        <select className="select__input">
          <option selected disabled>{ def }</option>
          {
            options.map((option, index) => {
              return <option key={ index } value={ options }>{ option }</option>
            })
          }
        </select>
      </div>
    )
  }
}
