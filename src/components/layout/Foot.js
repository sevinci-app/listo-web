import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const Foot = () => {
  const year  = new Date().getFullYear();
  return (
    <Footer style={{ textAlign: 'center' }}>
      Experiensa ©{year} Created by Sevinci Sàrl
    </Footer>
  )
}

export default Foot;
