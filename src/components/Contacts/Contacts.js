import React, { Component } from 'react';
import ContactItem from './ContactItem';
import data from '../../data/sonny';


const contactDetails = data.contacts;
export default class Contacts extends Component {
  render() {
    return (
      <div className="content__contacts bt_underline">
        <h3 className="content__subtitle">CONTACTS</h3>
        <ul className="flex__list">
          {
            contactDetails.map((contact, index) => 
              <ContactItem 
                key= { index }
                icon={contact.icon} 
                text={contact.text} 
                link={contact.link} />)
          }
        </ul>
      </div>
    )
  }
}
