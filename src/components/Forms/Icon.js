import React, { Component } from 'react';

const icons = {
  "phone" : '../../images/whatsapp-logo.svg',
  "skype" : '../../images/skype-logo.svg',
  "yahoo" : '../../images/yahoo-logo.svg',
  "gmail" : '../../images/google-logo.svg',
  "github" : '../../images/github-logo-1.svg',
  "facebook" : '../../images/facebook-letter-logo.svg',
  "linkedin" : '../../images/linkedin-logo.svg',
}

export default class Icon extends Component {
  render() {
    return (
      <i className="icon" >
        <img src={ icons[this.props.icon] } alt="" />
      </i>
    )
  }
}
