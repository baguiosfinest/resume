import React, { Component } from 'react';
import styled from 'styled-components';

const Name = styled.h1`
  font-weight: normal;
  text-align: center;
  margin: 0;
`;

const Position = styled.h4`
  font-weight: normal;
  text-align: center;
  margin: 0;
`;

const StyledHeader = styled.header`
  border-bottom: #ccc 5px solid;
  padding: 24px 0;
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
