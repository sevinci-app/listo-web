import React, { Component } from 'react';
import { ResultCard } from '@appbaseio/reactivesearch';



import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { getFormattedPrice } from '../../utils/Helpers';
import moment from 'moment';
import 'moment/locale/fr';

class ListoCards extends Component {
  voyageCards(res){
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
  }

  render(){
    return(
      <div className="result-cards">
        <ResultCard
          componentId="ResultCard"
          dataField="title"
          pagination={true}
          pages={5}
          from={0}
          size={20}
          loader="Chargement des résultats..."
          react={{and: ['list-region','list-country','list-theme','list-operator','PriceSensor','search']}}
          renderData={this.voyageCards}
          className={'voyage-card'}
          onNoResults="Nous n'avons trouvé aucun résultat"
          URLparams
          />
      </div>
    )
  }
}

export default ListoCards;
