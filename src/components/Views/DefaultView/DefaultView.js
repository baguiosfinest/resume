import React from 'react';
import { 
  Header, 
  Sidebar, 
  Content
} from '../../index.js';

export default function DefaultView({ data }) {
  return (
    <div className="view--default">
      <Header></Header>
      <div className="content">
        <Sidebar />
        <Content data={ data } />
      </div>
    </div>
  )
}
