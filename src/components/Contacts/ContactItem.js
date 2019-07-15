import React from 'react';
import Icon from '../Forms/Icon';

export default function ContactItem(props) {
  return (
    <li className="icon__list">
      { props.link ? `<a href=${props.link}>` : null }
          <Icon icon={ props.icon } /> props.text 
      { props.link ? '</a>' : null }
    </li>
  )
}
