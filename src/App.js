import React from 'react';
import { Header, Sidebar, Content } from './components/index';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <div className="content">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
