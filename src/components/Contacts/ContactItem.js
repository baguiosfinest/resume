import React from 'react';
import Icon from '../Forms/Icon';

export default function ContactItem(props) {
  return (
    <li className="icon__list">
      <Icon icon={ props.icon } /> { props.text }
    </li>
  )
}
