import React, { Component } from 'react';
import ContactItem from './ContactItem';

export default class Contacts extends Component {
  render() {
    return (
      <div className="content__contacts bt_underline">
        <h3 className="content__subtitle">CONTACTS</h3>
        <ul className="flex__list">
          <ContactItem icon="phone" text="0433778704" />
          <ContactItem icon="gmail" text="ynnossence@gmail.com" />
          <ContactItem icon="linkedin" text="ynnossence" />
          <ContactItem icon="github" text="baguiosfinest" />
        </ul>
      </div>
    )
  }
}
