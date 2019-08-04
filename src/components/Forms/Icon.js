import React, { Component } from 'react';

const icons = {
  "phone" : '../../images/baseline-smartphone-24px.svg',
  "skype" : '../../images/skype-logo.svg',
  "yahoo" : '../../images/baseline-email-24px.svg',
  "gmail" : '../../images/baseline-email-24px.svg',
  "github" : '../../images/github-logo-1.svg',
  "facebook" : '../../images/facebook-letter-logo.svg',
  "linkedin" : '../../images/linkedin-logo.svg',
  "address" : '../../images/baseline-home-24px.svg',
  "edit": '../../images/edit-document.svg'
}

export default class Icon extends Component {
  render() {
    return (
      <i className="icon" >
        <img src={ icons[this.props.icon] } className="icon__image" alt="" />
      </i>
    )
  }
}
