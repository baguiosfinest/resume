import React, { Component } from 'react';
import Profile from '../Profile/Profile';
import Experiences from '../Experience/Experiences';

import data from '../../data/sonny';

const experiences = data.experiences;

export default class Content extends Component {
  render() {
    return (
      <div className="content__main">
        <Profile />
        <Experiences experiences={ experiences } />
      </div>
    )
  }
}
