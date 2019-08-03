import React from 'react';
import Icon from '../Forms/Icon';
import ContactWrapper from '../Contacts/ContactWrapper';

export default function ContactItem({ link, icon, text, children }) {
  return (
    <li className="icon__list">
      {/* { props.link ? `<a href=${props.link}>` : null }
          <Icon icon={ props.icon } /> { props.text } 
      { props.link ? '</a>' : null } */}
      <ContactWrapper 
        condition={ link }
        wrapper= { children => <a href={link}>{ children }</a> }>
        <Icon icon={ icon } /> { text } 
      </ContactWrapper>
    </li>
  )
}
