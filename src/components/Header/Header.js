import React, { Component } from 'react';
import styled from 'styled-components';

const Name = styled.h1`
  font-weight: 600;
  text-align: center;
  margin: 0;
  font-size: 2.4em;
  text-transform: uppercase;
`;

const Position = styled.h4`
  font-weight: 300;
  text-align: center;
  margin: 0;
  text-transform: uppercase;
`;

const StyledHeader = styled.header`
  border-bottom: #3f51b5 5px solid;
  padding: 48px 0;
`;


export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <Name>Sonny Tambiac</Name>
        <Position>Frontend Developer</Position>
      </StyledHeader>
    )
  }
}
