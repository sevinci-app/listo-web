import React from 'react';

import { MainLayout } from './components/layout';
//import { Navigation } from './components/navigation';
//import { ListoFooter } from './components/footer';
// import { Post } from './components/post';
import { Inquiry } from './components/inquiry';
import { VoyageDetail } from './components/voyage';

import { Home } from './views/home';
import { About } from './views/about';
import { Blog } from './views/blog';
import { NoMatch } from './views/NoMatch';

//import Catalog from './views/catalog/Catalog';


import { Route, Switch, Redirect } from 'react-router-dom';

//import { Layout } from 'antd';

import 'antd/dist/antd.css';
import 'tachyons/css/tachyons.css';

//const { Content } = Layout;

const Routes = () => {  
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route exact path="/about" component={About}/>
        <Route exact path="/blog" component={Blog}/>
        <Route path="/inquiry" component={Inquiry}/>
        <Route path="/:id" component={VoyageDetail}/>
        <Route component={NoMatch}/>
      </Switch>
    </MainLayout>
  )
}

// const Routes = () => {
//   return(
//     <Layout className="layout">
//       <Navigation/>
//       <Content style={{ padding: '0 50px', marginTop: 85 }}>
//         <Switch>
//           <Route exact path="/" component={Catalog}/>
//           <Route exact path="/catalog">
//             <Redirect to="/"/>
//           </Route>
//           <Route path="/:id" component={VoyageDetail}/>
//           <Route exact path="/about" component={About}/>
//           <Route exact path="/blog" component={Blog}/>
//           <Route path="/inquiry" component={Inquiry}/>
//           <Route component={NoMatch}/>
//         </Switch>
//       </Content>
//       <ListoFooter />
//     </Layout>
//   )
// }

export default Routes;
