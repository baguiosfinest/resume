import React, { Component } from 'react';

export default class Button extends Component {

  handleButtonStyle = () => {
    const { text, style, onButtonClick, type } = this.props;
    switch (type) {
      case 'primary': 
        return <div onClick = { onButtonClick }  className="btn btn--primary">{ text }</div>;
      case 'danger': 
        return <div onClick = { onButtonClick }  className="btn btn--danger">{ text }</div>;
      default:
        return (
          <div onClick = { onButtonClick } className={ (style === text.toLowerCase()) ? 'btn btn--active' : 'btn' }>
            { text }
          </div>
        );
    }
  }

  render() {
    return (
      <React.Fragment>
        { this.handleButtonStyle() }
      </React.Fragment>
    )
  }
}
