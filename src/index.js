import React, { Component } from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import 'tachyons/css/tachyons.css';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';

class Main extends Component{
  render(){
    return (
      <Router>
        <Routes />
      </Router>
    )
  }
}

render(<Main/>, document.getElementById("root"));

serviceWorker.register();
