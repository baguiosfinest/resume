import React, { Component } from 'react';
import Contacts from '../Contacts/Contacts';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="content__sidebar" style={ sidebarStyle }>
        <Contacts />
        <Education />
        <Skills />
      </aside>
    )
  }
}

const sidebarStyle = {
  paddingLeft: 24,
}