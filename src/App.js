import React, { Component } from 'react';
import {
  StyleSelector, 
  JsonView,
  Loading,
  DefaultView,
  EditView } from './components/index';

import data from './data/sonny';
import edit_icon from './images/edit-document.svg';
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

  onHandleEditClick = () => {
    this.setState({
      style: 'edit',
      loading: true
    })
  }

  showLoading = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 1000);
  }

  handleView = () => {
    switch (this.state.style) {
      case 'json':
        this.showLoading();
        return (this.state.loading) ? 
          <Loading /> :
          <JsonView data={ data } />;
      case 'edit':
          this.showLoading();
          return <EditView />
      case 'default':
      default:
        return (
          <DefaultView data={ data } />
        )
    }
  }

  render() {
    return (
      <div className="container">
        <div className="btn__edit" onClick={ this.onHandleEditClick }> <img src={ edit_icon } alt="Edit" /> Edit</div>
        <StyleSelector onHandleClick={ this.onHandleClick } style={ this.state.style } />
        {
          this.handleView()
        }
      </div>
    );
  }
}

export default App;
