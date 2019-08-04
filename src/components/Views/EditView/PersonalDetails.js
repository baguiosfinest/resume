import React, { Component } from 'react';
import { Input, TextArea } from '../../Forms/index';
import './PersonalDetails.scss';

export default class PersonalDetails extends Component {
  render() {
    return (
      <section className="section__personal">
        <header className="section__header"><h2>Personal Details</h2></header>
        <div className="section__content">
          <Input type="text" name="First Name" />
          <Input type="text" name="Last Name" />
          <Input type="text" name="Phone Number" />
          <Input type="email" name="Email" />

          <Input type="text" additional_class="full" name="Address" />
          <TextArea additional_class="full" name="Awesome Introduction" />
        </div>
      </section>
    )
  }
}
