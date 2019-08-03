import React, { Component } from 'react';
import SkillItem from './SkillsItem';
import data from '../../data/sonny';

const skills = data.skills;

export default class Skills extends Component {
  render() {
    return (
      <div className="content__skills">
        <h3 className="content__subtitle">SKILLS</h3>
        <ul className="content__skills_list">
          {
            skills.map((skill,index) => <SkillItem key={ index } skill={ skill } />)
          }
        </ul>
      </div>
    )
  }
}
