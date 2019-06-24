import  './imageslider.css'
import React from 'react';
import { Fade } from 'react-slideshow-image';
import { Carousel } from 'antd';

const fadeImages = [
  'https://rukminim1.flixcart.com/flap/3376/560/image/676ca540c0fe7dd6.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/3376/560/image/b449b8dca0f0b945.jpg?q=50',
  'https://rukminim1.flixcart.com/flap/3376/560/image/9d1050658f91ceaf.jpg?q=50',
  "https://rukminim1.flixcart.com/flap/3376/560/image/98d0c64d37a5e4cc.jpg?q=50",
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slider = () => {
  return (
  // <div style={{marginTop: 10}}>
  //     <Carousel autoplay>
  //   <div>
  //     <img src='https://rukminim1.flixcart.com/flap/3376/560/image/676ca540c0fe7dd6.jpg?q=50' />
  //   </div>
  //   <div>
  //     <h3>2</h3>
  //   </div>
  //   <div>
  //     <h3>3</h3>
  //   </div>
  //   <div>
  //     <h3>4</h3>
  //   </div>
  // </Carousel>
  // </div>
  
    <Fade {...fadeProperties}>
      <div className="each-fade" style={{marginTop: 20}}>
        <div className="image-container" >
          <img src={fadeImages[0]} style={{ width: '100%'}}  />
        </div>
      </div>
      <div className="each-fade" style={{marginTop: 20}}>
        <div className="image-container">
          <img src={fadeImages[1]} style={{ width: '100%'}} />
        </div>
      </div>
      <div className="each-fade" style={{marginTop: 20}}>
        <div className="image-container">
          <img src={fadeImages[2]} style={{ width: '100%'}} />
        </div>
      </div>
      <div className="each-fade" style={{marginTop: 20}}>
        <div className="image-container">
          <img src={fadeImages[3]} style={{ width: '100%'}} />
        </div>
      </div>
    </Fade>
  )
}

export default Slider;