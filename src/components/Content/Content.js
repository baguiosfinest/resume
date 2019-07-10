import React, { Component } from 'react';
import Profile from '../Profile/Profile';
import Experiences from '../Experience/Experience'

export default class Content extends Component {
  render() {
    return (
      <div className="content__main">
        <Profile />
        <Experiences />
      </div>
    )
  }
}
