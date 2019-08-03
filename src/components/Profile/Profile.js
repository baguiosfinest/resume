import React, { Component } from 'react';
import data from '../../data/sonny';

class Profile extends Component {
  render() {
    return (
      <div className="profile bt_underline">
        <h3 className="content__subtitle">PROFILE</h3>
        <p>{ data.profile }</p>
      </div>
    );
  }
}

export default Profile;
