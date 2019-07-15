import React, { Component } from 'react';
import ContactItem from './ContactItem';

const contactDetails = [{
  icon: 'address',
  text: '26 Gordonia Street, Macgregor, QLD, 4109',
  link: ''
},{
  icon: 'phone',
  text: '0433778704',
  link: 'tel://0433778704'
},{
  icon: 'gmail',
  text: 'ynnossence@gmail.com',
  link: 'mailto:ynnossence@gmail.com'
},{
  icon: 'linkedin',
  text: 'ynnossence',
  link: 'https://www.linkedin.com/in/ynnossence/'
},{
  icon: 'github',
  text: 'baguiosfinest',
  link: 'https://github.com/baguiosfinest'
}];
export default class Contacts extends Component {
  render() {
    return (
      <div className="content__contacts bt_underline">
        <h3 className="content__subtitle">CONTACTS</h3>
        <ul className="flex__list">
          {
            contactDetails.map(contact => <ContactItem icon={contact.icon} text={contact.text} link={contact.link} />)
          }
        </ul>
      </div>
    )
  }
}
