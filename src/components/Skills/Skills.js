import React, { Component } from 'react';
import SkillItem from './SkillsItem';

const skills = 
[{
  id: 1,
  name: 'HTML',
  rate: 9
},
{
  id: 2,
  name: 'CSS',
  rate: 9
},
{
  id: 3,
  name: 'Wordpress',
  rate: 8
},
{
  id: 4,
  name: 'Javascript',
  rate: 8
},
{
  id: 5,
  name: 'React',
  rate: 8
},
{
  id: 6,
  name: 'Php/Mysql',
  rate: 7
}];

export default class Skills extends Component {
  render() {
    return (
      <div className="content__skills">
        <h3 className="content__subtitle">SKILLS</h3>
        <ul className="content__skills_list">
          {
            skills.map(skill => <SkillItem skill={ skill } />)
          }
        </ul>
      </div>
    )
  }
}
