import React, { Component } from 'react';
import Navigation from './Navigation';
import Foot from './Foot';
import { Layout } from 'antd';

//const { Content } = Layout;

class MainLayout extends Component {

  render(){

    return(
      <Layout className="layout">
        <Navigation/>
        {this.props.children}
        <Foot/>
      </Layout>
    )
  }
}

export default MainLayout;
