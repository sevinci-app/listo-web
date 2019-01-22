import React, { Component } from 'react';
import { ReactiveList } from '@appbaseio/reactivesearch';
import { Link } from 'react-router-dom';
import { getFormattedPrice } from '../../utils/Helpers';
import './Catalog.css';
import { Icon } from 'react-icons-kit';
import {hotel} from 'react-icons-kit/fa/hotel';
import {takeOff} from 'react-icons-kit/entypo/takeOff';
import {androidBoat} from 'react-icons-kit/ionicons/androidBoat';
import {buildingO} from 'react-icons-kit/fa/buildingO';
import {office} from 'react-icons-kit/icomoon/office';
import {ic_hotel} from 'react-icons-kit/md/ic_hotel';
import {u1F303} from 'react-icons-kit/noto_emoji_regular/u1F303';
import {u1F3E9} from 'react-icons-kit/noto_emoji_regular/u1F3E9';

class ListoResults extends Component {
  voyageResultList(data){
    const price = getFormattedPrice(data.price);
    return (
      <article className="card">
        <Link to={data._id}>
          <div className="card-img">
            <img alt={data.title} src={data.thumbnail} />
          </div>
          <div className="card-body  ma3">
            <div className="uncovered">
              <h6 className="f6 gray mb0 fw1">{price}</h6>
              <h3 className="f3 fw2 ma0"><div className="" dangerouslySetInnerHTML={{ __html: data.title }} /></h3>
            </div>
            <div className="covered">
              {data.categories && data.categories.includes('Vol') &&
                <span><Icon icon={takeOff} className="gray"/></span>
              }
              <span><Icon icon={androidBoat} className="gray"/></span>
              <span><Icon icon={hotel} className="gray"/></span>
              <span><Icon icon={buildingO} className="gray"/></span>
              <span><Icon icon={office} className="gray"/></span>
              <span><Icon icon={ic_hotel} className="gray"/></span>
              <span><Icon icon={u1F303} className="gray"/></span>
              <span><Icon icon={u1F3E9} className="gray"/></span>
            </div>
          </div>
        </Link>
      </article>
    )
  }

  render(){
    return (
      <div className="result-list">
        <ReactiveList
          componentId="SearchResult"
          dataField="title"
          className="result-list-container centered"
          size={20}
          renderData={this.voyageResultList}
          pagination
          URLParams
          react={{and: ['list-region','list-country','list-theme','list-operator','PriceSensor','search']}}
          innerClass={{
            list: 'result-card-list cards',
            pagination: 'result-list-pagination',
            resultsInfo: 'result-list-info',
            poweredBy: 'powered-by',
          }}
          />
      </div>
    )
  }
}


export default ListoResults;
