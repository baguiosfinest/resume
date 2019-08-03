import React, { Component } from 'react';
import Experience from './Experience';

export default class Experiences extends Component {

  // constructor(props) {
  //   super(props);
    
  // }

  render() {

    return (
      <div className="experiences">
        <h3 className="content__subtitle">EXPERIENCE</h3>
        
        { this.props.experiences.map((experience, index) => {
          return <Experience key={index} details={experience} />;
        }) }
        
      </div>
    )
  }
}
