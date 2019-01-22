import React from 'react';
import { contained } from '../../components/layout/style';
import { Layout } from 'antd';

const { Content } = Layout;

const About = () => {
  return (
    <Content style={contained}>
      <h3>Hello from About</h3>
    </Content>
  )
}

export default About;
