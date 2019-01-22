import React, { Component } from 'react';
import Config from '../../Config';
import { ReactiveBase, SelectedFilters, DataSearch, RangeSlider, MultiList } from '@appbaseio/reactivesearch';
import { Link } from 'react-router-dom';
import { Row, Col, Collapse, Button } from 'antd';
import { getFormattedPrice } from '../../utils/Helpers';
import ListoCards from './Cards';
import moment from 'moment';
import 'moment/locale/fr';
import theme from './theme';
import ListoResults from './Results';

const Panel = Collapse.Panel;

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
			<ReactiveBase app={Config.APPNAME} credentials={Config.CREDENTIALS} url={Config.HOST_URL} theme={theme}>
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
								<RangeSlider componentId="PriceSensor" dataField="price" title="Price Range" range={{ start: 50, end: 5000 }} rangeLabels={{start: "CHF 50",end: "CHF 5000"}} defaultSelected={{start: 50, end: 4500}} stepValue={10}/>
							</Panel>
						</Collapse>
						<br/>
					</Col>
					<Col xs={24} sm={24} md={19} lg={18} xl={18}>
						<DataSearch
							componentId="search"
							dataField={['title','tags','locations', 'country']}
							style={{ marginBottom: 15 }}
							placeholder="Recherche"
							/>
						<SelectedFilters />

						<ListoResults/>
						<ListoCards/>

					</Col>
				</Row>
			</ReactiveBase>
		)
	}
}

export default Catalog;
