import React, { Component } from 'react';
import Contacts from '../Contacts/Contacts';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import data from '../../data/sonny';

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="content__sidebar" style={ sidebarStyle }>
        <Contacts />
        <Education data={ data } />
        <Skills />
      </aside>
    )
  }
}

const sidebarStyle = {
  paddingLeft: 24,
}