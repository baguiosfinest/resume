import React, { Component } from 'react';
import Button from '../Forms/Button';

export default class StyleSelector extends Component {

  onHandleButtonClick = (e) => {
    //console.log('Sample:', e.target.textContent.toLowerCase());
    this.props.onHandleClick(e.target.textContent.toLowerCase())
  }

  render() {
    const style = this.props.style;
    return (
      <div className="style_selector">
        <Button onButtonClick = { this.onHandleButtonClick } style={ style } text="Default" />
        <Button onButtonClick = { this.onHandleButtonClick } style={ style } text="JSON" />
      </div>
    )
  }
}
