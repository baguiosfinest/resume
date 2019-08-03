import React, { ComponentFactory } from 'react';
import { 
  Header, 
  Sidebar, 
  Content, 
  StyleSelector, 
  JsonView,
  Loading } from './components/index';
import data from './data/sonny';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: 'default',
      loading: false
    }
  }

  onHandleClick = (text) => {
    this.setState({
      style: text,
      loading: true
    })
  }

  handleView = () => {
    switch (this.state.style) {
      case 'json':

        setTimeout(() => {
          this.setState({
            loading: false
          })
        }, 1000);

        return (this.state.loading) ? 
          <Loading /> :
          <JsonView data={ data } />;
      

        //return (<JsonView data={ data } />);
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
