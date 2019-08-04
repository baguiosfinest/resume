import React, { Component } from 'react';
import { References, Experiences, Profile } from '../index';

export default class Content extends Component {
  render() {
    const data = this.props.data;
    const experiences = data.experiences;
    const references = data.references;

    return (
      <div className="content__main">
        <Profile />
        <Experiences experiences={ experiences } />
        { (references) ? <References references={ references } /> : null }
      </div>
    )
  }
}
