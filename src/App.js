import React, { ComponentFactory } from 'react';
import { Header, Sidebar, Content, StyleSelector, JsonView } from './components/index';
import data from './data/sonny';
import './css/normalize.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: 'default'
    }
  }

  onHandleClick = (text) => {
    this.setState({
      style: text
    })
  }

  handleView = () => {
    switch (this.state.style) {
      case 'json': 
        return (<JsonView data={ data } />);
      case 'default':
      default:
        return (
          <div className="view--default">
            <Header></Header>
            <div className="content">
              <Sidebar />
              <Content />
            </div>
          </div>
        )
    }
  }

  render() {
    return (
      <div className="container">
        <StyleSelector onHandleClick={ this.onHandleClick } style={ this.state.style } />
        {
          this.handleView()
        }
      </div>
    );
  }
}

export default App;
