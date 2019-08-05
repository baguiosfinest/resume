import React from 'react';

export default function EducationItem(props) {
  return (
    <div className="content__education">
      <h4>
        <strong>{ props.type }</strong><br />
        { props.course }
      </h4>
      <p>{ props.school }<br />
        { props.startDate } - { props.endDate }</p>
    </div>
  )
}
