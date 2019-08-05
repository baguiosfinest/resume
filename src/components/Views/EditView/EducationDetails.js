import React, { Component } from 'react';
import { Input, TextArea } from '../../Forms/index';
import { Education } from '../../index';
import AddEducation from './AddEducation';

export default class EducationDetails extends Component {
  render() {
    const data = this.props.data;
    return (
      <section className="section section__education">
        <header className="section__header"><h2>Education Details</h2></header>
        <div className="section__content">
          <AddEducation />
        </div>
      </section>
    )
  }
}
