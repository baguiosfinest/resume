import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import EducationDetails from './EducationDetails';
import Maintenance from '../../Maintenance/Maintenance';
import './EditView.scss';
import data from '../../../data/sonny';

export default class EditView extends Component {
  render() {
    return (
      <div className="view--edit">
        <Maintenance />
        {/* <PersonalDetails data = { data } />
        <EducationDetails data = { data } /> */}
      </div>
    )
  }
}
