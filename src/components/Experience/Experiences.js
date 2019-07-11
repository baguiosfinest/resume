import React, { Component } from 'react';
import Experience from './Experience';

export default class Experiences extends Component {
  render() {
    return (
      <div className="experiences">
        <h3 className="content__subtitle">EXPERIENCE</h3>
        <Experience />
        <Experience />
        <Experience />
        <Experience />
      </div>
    )
  }
}
