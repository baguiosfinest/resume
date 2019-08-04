import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import './EditView.scss';

export default class EditView extends Component {
  render() {
    return (
      <div className="view--edit">
        <PersonalDetails />
      </div>
    )
  }
}
