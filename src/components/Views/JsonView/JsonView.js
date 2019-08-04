import React, { Component } from 'react';
import Prism from 'prismjs';
import '../../../../node_modules/prismjs/components/prism-json';
//import '../../vendor/prism/prism.min.js';
import '../../../vendor/prism/prism.okaidia.css';
// import data from '../../data/sonny';
import '../../../css/animation.css';

export default class JsonView extends Component {

  componentDidMount(){
    //Prism.highlightAll();
    document.querySelector('code.language-json').innerHTML = Prism.highlight(JSON.stringify(this.props.data, null, 2), Prism.languages.json, 'json');
  }

  render() {
    
    return (
      <div className="view--json fade-in-fwd" id="view--json">
        <pre className="language-json">
          <code className="language-json">
             { /*  */  }
          </code>
        </pre>
      </div>
    )
  }
}
