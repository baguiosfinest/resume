import React, { Component } from 'react';
import EducationItem from './EducationItem';

export default class Education extends Component {
  render() {
    return (
      <div className="content__education bt_underline">
        <h3 className="content__subtitle">EDUCATION</h3>
        <ul className="flex__list">
          <li>
            <EducationItem 
              type="Diploma"
              course="Information Technology"
              school="Queensford College"
              date="2019-present"
            />
          </li>
          <li>
            <EducationItem 
              type="Bachelors Degree"
              course="Computer Science"
              school="University of the Cordilleras"
              date="2004-2007"
            />
          </li>
        </ul>
      </div>
    )
  }
}
