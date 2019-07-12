import React, { Component } from 'react';
import Profile from '../Profile/Profile';
import Experiences from '../Experience/Experiences';

const experiences = [
  {
    id: 1,
    position: 'Frontend Developer',
    company: 'Sample Company',
    date: '2011-2012',
    description: {
      intro: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, dolorum officia optio est ipsum laudantium enim nesciunt quia quidem sit alias maxime commodi maiores illo? Omnis deserunt exercitationem maxime beatae.',
      tasks: ['Eat', 'Love', 'Pray']
    }
  },
  {
    id: 2,
    position: 'Senior Frontend Developer',
    company: 'Sample Company',
    date: '2011-2012',
    description: {
      intro: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, dolorum officia optio est ipsum laudantium enim nesciunt quia quidem sit alias maxime commodi maiores illo? Omnis deserunt exercitationem maxime beatae.',
      tasks: ['Eat', 'Love', 'Pray']
    }
  }
];

export default class Content extends Component {
  render() {
    return (
      <div className="content__main">
        <Profile />
        <Experiences experiences={ experiences } />
      </div>
    )
  }
}
