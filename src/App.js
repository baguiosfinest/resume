import React, { ComponentFactory } from 'react';
import { Header, Sidebar, Content, StyleSelector } from './components/index';
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

  render() {
    return (
      <div className="container">
        <StyleSelector onHandleClick={ this.onHandleClick } style={ this.state.style } />
        <Header></Header>
        <div className="content">
          <Sidebar />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
