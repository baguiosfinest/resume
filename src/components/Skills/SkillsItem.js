import React from 'react';
import Icon from '../Forms/Icon';

export default function SkillsItem(props) {
  const skill = props.skill;
  const progressStyle = {
    width: skill.rate + '0%'
  }
  return (
    <li className="skill__item">
      <strong className="skill__name">{skill.name}</strong>
      <div className="progress">
        <div className="progress__bar" style={ progressStyle }></div>
      </div>
    </li>
  )
}
