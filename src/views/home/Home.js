import React from 'react';

import Catalog from '../../components/catalog/Catalog';
import { contained } from '../../components/layout/style';
import { Layout } from 'antd';

const { Content } = Layout;

const Home = () => {
  return (
    <Content style={contained}>
      <section className="catalog-container">
        <Catalog />
      </section>
    </Content>
  )
}

export default Home;
