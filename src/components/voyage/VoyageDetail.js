import React, {Component} from 'react';
import { Layout, Row, Col, Button, Icon } from 'antd';
import ReactPlayer from 'react-player';
import AppBase from 'appbase-js';
import Config from '../../Config';

import ImageGallery from './ImageGallery';
import DisplayList from './DisplayList';

import './voyageDetail.css';

const { Content } = Layout;

class VoyageDetail extends Component {

  constructor() {
    super();
    this.state = {
      voyage: {},
      lightboxIsOpen: false,
      currentImage: 0
    }
  }

  componentDidMount() {
    let voyageID = this.props.match.params.id;

    let appbaseRef = AppBase({
      url: Config.HOST_URL,
      app: Config.APPNAME,
      credentials: Config.CREDENTIALS
    });

    appbaseRef.get({
      type: "expch",
      id:voyageID
    }).then(response => {
      this.setState({
        voyage: response._source
      });
    }).catch(function(error) {
      console.log(error);
    })
  }

  componentWillUnmount() {
    this.setState({
      voyage: {}
    });
  }


  render(){
    const voyage = this.state.voyage;

    const coverImageCSS = {
      backgroundColor: 'blue',
      height: '330px',
      display: 'block',
      backgroundImage: `url('${voyage.cover_image}')`,
      backgroundSize: 'cover',
      transform: 'skewY(-2.2deg)',
      transformOrigin:'0 0',
      filter: 'brightness(0.6)'
    };


    // <ReactPlayer url="https://www.youtube.com/watch?v=oLnfdDQGu-E&t&modestbranding=1" controls="true" width="100%" height="180px" className="w-100 shadow-5"/>
    //<img src={coverImageURL} alt={voyage.title} className="w-100 shadow-5" style={{visibility:'hidden'}}/>

    return (
      <div className="voyage-detail-card" style={{ marginTop: '24px'}}>
        <header style={{position:'relative'}}>
          <div style={coverImageCSS}></div>
          <div style={{ position:'absolute', top:'50px', right:'10px'}}>
            <Button icon="picture" onClick={this.openLightbox} style={{position:'absolute !important'}} type="default">Photos</Button>
          </div>
        </header>
        <div className="contentCSS">
          <Row gutter={24}>
            <Col span={7}>
              <img src={voyage.cover_image} alt={voyage.title} className="w-100 shadow-5" />
            </Col>
            <Col span={17}>
              <span className="f1 lh-title white avenir b">{voyage.title}</span>
              <br/>
              <div className="white mb1">
                {voyage.slogan} <br/>{voyage.number_of_days} days / {voyage.number_of_nights} nights
                <br/>
                <span className="f2 fw1">CHF {voyage.price}</span>
              </div>
            </Col>
          </Row>
        </div>
        <Content style={{ padding:'0 50px', marginTop:'55px'}}>
          <Row gutter={24}>
            <Col span={7}>
              <Button size="large" type="primary" block><Icon type="book" />Quote</Button>
              <br/>
              <br/>
              <table className="mt2">
                <tbody>
                  <tr>
                    <td className="b" valign="top" width="50%">Country </td>
                    <td><DisplayList data={voyage.countries}/></td>
                  </tr>
                  <tr>
                    <td className="b" valign="top">Region </td>
                    <td><DisplayList data={voyage.region}/></td>
                  </tr>
                  <tr>
                    <td className="b" valign="top">Destination </td>
                    <td><DisplayList data={voyage.locations}/></td>
                  </tr>
                  <tr>
                    <td className="b avenir" valign="top">Themes </td>
                    <td><DisplayList data={voyage.themes}/></td>
                  </tr>
                  <tr>
                    <td className="b" valign="top">Categories </td>
                    <td><DisplayList data={voyage.categories}/></td>
                  </tr>
                  <tr>
                    <td className="b" valign="top">Tags</td>
                    <td><DisplayList data={voyage.tags}/></td>
                  </tr>
                  <tr>
                    <td className="b">Operator</td>
                    <td>{voyage.operator}</td>
                  </tr>
                  <tr>
                    <td className="b"></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col span={17}>
              <div dangerouslySetInnerHTML={{ __html: voyage.content }} />
              <ImageGallery data={voyage.gallery}/>
            </Col>
          </Row>
        </Content>
      </div>
    )
  }
}

export default VoyageDetail;


// sources:
// https://stackoverflow.com/questions/28269669/css-pseudo-elements-in-react
// https://codesandbox.io/s/zq7jn9q6o3
// https://css-tricks.com/almanac/properties/f/filter/
//
