import React, { Component } from 'react';
import { Input, Select, Button } from '../../Forms/index';


export default class AddEducation extends Component {
  constructor(props) {
    super(props);
  }

  getYears = (max = 10) => {
    const date = new Date();
    let yearNow = date.getFullYear();
    if(max !== null) {
      yearNow += max;
    }
    const optionYears = [];
    for(let i = 1969; i <= yearNow; i++ ){
      optionYears.unshift(i);
    }
    return optionYears;
  }


  render() {

    const optionMonths = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];

    return (
      <div className="add__education">
        <Input type="text" name="Qualification" />
        <Input type="text" name="Course" />
        <Input type="text" name="Institution" />
        <Select def='Year Start' options={ this.getYears(null) } label='Year Started' />
        <Select def='Year End' options={ this.getYears() } label='Year End' />

        <Button text="Save" type="primary" />
        <Button text="Delete" type="danger" />
      </div>
    )
  }
}
