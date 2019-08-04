import React from 'react';
import ContactItem from '../Contacts/ContactItem';

export default function Reference({ reference }) {
  const { name, position, company, contact, email } = reference;
  return (
    <div className="references__list_item">
      <p><strong>{ name }</strong></p>
      <p>{ position }</p>
      <p>{ company }</p>
      <p>{ contact }</p>
      <p>{ email }</p>
    </div>
  );
}
