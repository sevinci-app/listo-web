import React from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';

import 'antd/dist/antd.css';

const { Header } = Layout;

const Navigation = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} >
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px'}}>
        <Menu.Item key="0"><Icon type="check-circle" style={{fontSize:20}}/>Listo</Menu.Item>
        <Menu.Item key="1" style={{float:'right'}}><Link to="/inquiry">Demande de Devis</Link></Menu.Item>
        <Menu.Item key="2" style={{float:'right'}}><Link to="/blog">Blog</Link></Menu.Item>
        <Menu.Item key="3" style={{float:'right'}}><Link to="/about">About</Link></Menu.Item>
        <Menu.Item key="4" style={{float:'right'}}><Link to="/">Catalog</Link></Menu.Item>
      </Menu>
    </Header>
  )
}

export default Navigation;
