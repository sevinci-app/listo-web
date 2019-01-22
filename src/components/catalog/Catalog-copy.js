import React, { Component } from 'react';
import Config from '../../Config';
import { ReactiveBase, SelectedFilters, ResultList, ResultCard, DataSearch, RangeSlider, MultiList } from '@appbaseio/reactivesearch';
import { Link } from 'react-router-dom';
import { Row, Col, Collapse, Button, Card } from 'antd';
import { getFormattedPrice } from '../../utils/Helpers';
import './Catalog.css';
import moment from 'moment';
import 'moment/locale/fr';
const Panel = Collapse.Panel;

// const gridView = (data) => {
//   console.log(data);
//   return (
//     <div className="result-item">
//       {data.title}
//     </div>
//   );
// }

const gridView = (data) => (
	<div className="result-item" key={data.slug}>
    <Card title="hello">blues</Card>
	</div>
);

class Catalog extends Component {

  voyageList(res){
    if (!res) return null;

    // getFormattedPrice comes from Helpers
    const price = getFormattedPrice(res.price);

    moment.locale('fr');
    var date_from = moment(res.start_date).format('ll');
    var date_to = moment(res.end_date).format('ll');
    let countries = res.countries;

    if (countries == null) {
      countries = "";
    } else {
      countries.toString();
    }

    let slogan = res.slogan;
    if (res.slogan == null) {
      slogan = "";
    }else{
      slogan = slogan.toLowerCase();
    }
    let title = `<span className="tc f3 lh-title avenir">${res.title}</span>`;

    return {
      image: res.thumbnail,
      title: (<div className="tc" dangerouslySetInnerHTML={{ __html: title }} />),
      description: (
        <div className="tc hover-black">
          <p>{date_from} - {date_to}</p>
          <p>{res.number_of_days} jours/{res.number_of_nights} nuits</p>
          {price}
          <br/>
          <span className="slogan">{slogan}</span>
          {this.getFinalPrice}
          <br/>
          <Button type="primary" block><Link to={res._id}>Detail</Link></Button>
          <br/>
          <br/>
        </div>
      ),
      url: (
        <Link to={res._id}></Link>
      )
    }
  };

  render() {
    return (
      <ReactiveBase app={Config.APPNAME} credentials={Config.CREDENTIALS} url={Config.HOST_URL} analytics>
        <Row gutter={16} style={{ padding: 0 }}>
          <Col xs={24} sm={24} md={5} lg={6} xl={6}>
            <Collapse bordered={false} defaultActiveKey={['1']}>
              <Panel header="Regions du monde" key="1">
                <MultiList componentId="list-region" dataField="region.keyword" style={{marginBottom: 20}} placeholder="Rechercher une region du monde"/>
              </Panel>
              <Panel header="Pays" key="2">
                <MultiList componentId="list-country" dataField="countries.keyword" style={{ marginBottom: 20 }} placeholder="Rechercher un pays"/>
              </Panel>
              <Panel header="Themes" key="3">
                <MultiList componentId="list-theme" dataField="themes.keyword" style={{ marginBottom: 20 }} placeholder="Rechercher un thème"/>
              </Panel>
              <Panel header="Tour operateurs" key="4">
                <MultiList componentId="list-operator" dataField="operator.keyword" style={{ marginBottom: 20 }}/>
              </Panel>
              <Panel header="Prix" key="5">
                <RangeSlider
                  componentId="PriceSensor"
                  dataField="price"
                  title="Price Range"
                  range={{ start: 50, end: 5000 }}
                  rangeLabels={{start: "CHF 50",end: "CHF 5000"}}
                  defaultSelected={{start: 50, end: 4500}}
                  stepValue={10}
                  />
              </Panel>
            </Collapse>
            <br/>
          </Col>
          <Col xs={24} sm={24} md={19} lg={18} xl={18}>
            <DataSearch
              componentId="search"
              dataField={['title','tags','locations', 'country']}
              fieldWeights={[1,1,1]}
              highlightField={['genres']}
              style={{ marginBottom: 15 }}
              placeholder="Recherche"
              />
            <SelectedFilters />


              <div className="flex row-reverse app-container">
                <div className="results-container">
                  <ResultList
                    componentId="ResultList"
                    dataField="title"
                    pagination
                    pages={5}
                    from={0}
                    size={20}
                    loader="Chargement des résultats..."
                    react={{and: ['list-region','list-country','list-theme','list-operator','PriceSensor','search']}}
                    renderData={data => gridView(data)}
                    className={'voyage-list'}
                    onNoResults="Nous n'avons trouvé aucun résultat"
                    URLparams
                    innerClass={{
                      list: 'result-list-container',
                      pagination: 'result-list-pagination',
                      resultsInfo: 'result-list-info',
                      poweredBy: 'powered-by',
                    }}
                    />
                </div>
              </div>


            <ResultCard
              componentId="ResultCard"
              dataField="title"
              pagination={true}
              pages={5}
              from={0}
              size={20}
              loader="Chargement des résultats..."
              react={{and: ['list-region','list-country','list-theme','list-operator','PriceSensor','search']}}
              renderData={this.voyageList}
              className={'voyage-card'}
              onNoResults="Nous n'avons trouvé aucun résultat"
              URLparams
              />
          </Col>
        </Row>
      </ReactiveBase>
    );
  }
}

export default Catalog;
