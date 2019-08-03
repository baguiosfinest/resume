import React, { Component } from 'react';
import EducationItem from './EducationItem';
import data from '../../data/sonny';

export default class Education extends Component {
  render() {
    return (
      <div className="content__education bt_underline">
        <h3 className="content__subtitle">EDUCATION</h3>
        <ul className="flex__list">
          { data.education.map((edu, index) => {
            return (
              <li key={ index }>
                <EducationItem 
                  type={ edu.type }
                  course={ edu.course }
                  school={ edu.school }
                  date={ edu.date }
                />
              </li>
            )
          }) }
        </ul>
      </div>
    )
  }
}
