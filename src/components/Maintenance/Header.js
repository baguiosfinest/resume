import React from 'react';
import './Header.scss';

export default function Header({ heading, desc }) {
  return (
    <header className="header">
      <h1>{ heading }</h1>
      <p>{ desc }</p>
    </header>
  )
}
