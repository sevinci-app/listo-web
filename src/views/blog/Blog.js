import React from 'react';
import { contained } from '../../components/layout/style';
import { Layout } from 'antd';
import {
  ReactiveBase,
  ReactiveList,
  //ResultCard,  
} from '@appbaseio/reactivesearch';

import Config from '../../Config';

const { Content } = Layout;

class Blog extends React.Component {

  render(){
    return (
      <Content style={contained}>
        <h1>Hello from Bloga</h1>
        <ReactiveBase
          app={Config.APPNAME} credentials={Config.CREDENTIALS} url={Config.HOST_URL}
          >
          <div className="row">
            <div className="col">
              <ReactiveList
                componentId="SearchResult"
                dataField="title"
                className="result-list-container"
                size={5}
                renderData={this.booksReactiveList}
                pagination
                URLParams
                react={{
                  and: ['BookSensor'],
                }}
                />
            </div>
          </div>
        </ReactiveBase>
      </Content>
    )
  }
  booksReactiveList(data) {
    return (
      <div className="flex book-content" key={data._id}>
        <img src={data.thumbnail} alt="Book Cover" className="book-image" />
        <div className="flex column justify-center" style={{ marginLeft: 20 }}>
          <div className="book-header">{data.title}</div>
          <div className="flex column justify-space-between">
            <div>
              <div>
                by <span className="authors-list">{data.operator}</span>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default Blog;

// <ReactiveBase app={Config.APPNAME} credentials={Config.CREDENTIALS} url={Config.HOST_URL}>
//   <ReactiveList onData={(res) => <div>{res.title}</div>}/>
//
// </ReactiveBase>

//<ReactiveList renderData={(res) => <div>{res.title}</div>}/>
//
// <ResultCard
//   componentId="ResultCard"
//   dataField="title"
//   pagination={true}
//   pages={5}
//   from={0}
//   size={20}
//   loader="Chargement des résultats..."
//   react={{and: ['list-region','list-country','list-theme','list-operator','PriceSensor','search']}}
//   renderData={function(res){
//     return{
//       image: res.thumbnail,
//       title: (<div className="tc" dangerouslySetInnerHTML={{ __html: res.title }} />),
//       description: (
//         <div>
//           <span className="slogan">{res.slogan}</span>
//           <br/>
//           <span>{res.operator}</span>
//         </div>
//       )
//     }
//   }}
//   className={'voyage-card'}
//   onNoResults="Nous n'avons trouvé aucun résultat"
//   URLparams
//   />
//
//
//
//
//
