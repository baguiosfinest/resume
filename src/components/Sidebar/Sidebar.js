import React, { Component } from 'react';
import Contacts from '../Contacts/Contacts';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="content__sidebar">
        <Contacts />
        <Education />
        <Skills />
      </aside>
    )
  }
}
