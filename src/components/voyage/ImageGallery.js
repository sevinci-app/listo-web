import React, {Component} from 'react';
import Lightbox from 'react-images';

class ImageGallery extends Component{
  constructor() {
    super();
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    }
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);

  }

  openLightbox(event) {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: true,
    });
  }

  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext () {
    console.log(this.state.currentImage);
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  gotoImage (index) {
    this.setState({
      currentImage: index,
    });
  }

  handleClickImage () {
    if (this.state.currentImage === this.props.images.length - 1) return;
    this.gotoNext();
  }

  // createImageGallery {
  //   console.log(props);
  //   console.log(props.length);
  //   //const gallery = props.map(item => item);
  //   //return gallery;
  // }

  render(){
    let images = [];
    let images2=[
      { src: 'https://indalo.experiensa.ch/wp-content/uploads/sites/2/2018/11/nature-3292942.jpg' },
      { src: 'https://indalo.experiensa.ch/wp-content/uploads/sites/2/2018/11/mauritius-2006119.jpg' },
      { src: 'https://indalo.experiensa.ch/wp-content/uploads/sites/2/2018/11/scenery-632230.jpg' },
      { src: 'https://indalo.experiensa.ch/wp-content/uploads/sites/2/2018/11/mauritius-2670916.jpg'}
    ];
    if(this.props.data){
       images = this.props.data.map((item) => {
        let obj = {src:item}
        return obj;
      })
    }
    console.log(images);
    console.log(images2);


    return (
      <div>
      <Lightbox
      images={images}

      onClickNext={this.gotoNext}
      onClickPrev={this.gotoPrevious}
      onClose={this.closeLightbox}
      preventScroll={this.props.preventScroll}
      showThumbnails={this.props.showThumbnails}
      currentImage={this.state.currentImage}
      />
      </div>
    )
  }
}




// <Lightbox
// images={[
//   { src: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&q=80' },
//   { src: 'https://images.unsplash.com/photo-1546082513-ec535db93463?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9' },
//   { src: 'https://images.unsplash.com/photo-1545306286-e67f94662831?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9' }
// ]}
//   isOpen={this.state.lightboxIsOpen}
//   onClickNext={this.gotoNext}
//   onClickPrev={this.gotoPrevious}
//   onClose={this.closeLightbox}
//   preventScroll={this.props.preventScroll}
//   showThumbnails={this.props.showThumbnails}
//   currentImage={this.state.currentImage}
//   />


// <Gallery images={THEMED_IMAGES.map(({ caption, id, orientation, useForDemo }) => ({
//     src: makeUnsplashSrc(id),
//     thumbnail: makeUnsplashThumbnail(id, orientation),
//     srcSet: [
//       makeUnsplashSrcSet(id, 1024),
//       makeUnsplashSrcSet(id, 800),
//       makeUnsplashSrcSet(id, 500),
//       makeUnsplashSrcSet(id, 320),
//     ],
//     caption,
//     orientation,
//     useForDemo,
//   }))}

export default ImageGallery;
