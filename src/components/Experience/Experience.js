import React, { Component } from 'react'

export default class Experience extends Component {
  render() {

    const details = this.props.details;
    const tasks = details.description.tasks;

    return (
      <div className="experience">
        <h4 className="job__position">{ details.position }</h4>
        <p className="job__company"><i>{ details.company } / { details.date }</i></p>
        {(details.description.intro) ? <p className="job__desc">{details.description.intro}</p> : null }
        {
          (tasks) ? 
            <React.Fragment>
              <h4 className="job__subtitle">Job Description:</h4> 
              <ul className="job__tasks">
                { tasks.map((task, index) => {
                  return <li key={ index }>{task}</li>
              }) }
              </ul>
            </React.Fragment> : null
        }
        {(details.description.tools) ? <p className="job__tools"><strong>Tools: </strong>{details.description.tools}</p> : null }
      </div>
    )
  }
}
