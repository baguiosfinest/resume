import React from 'react';
import './References.css';
import Reference from './Reference';

export default function References({ references }) {
  return (
    <div className="references btop_underline">
      <h3 className="content__subtitle">References</h3>
      <div className="references__list">
        { references.map((reference, index) => {
          return <Reference key={ index } reference = { reference } />;
        }) }
      </div>
    </div>
  )
}
