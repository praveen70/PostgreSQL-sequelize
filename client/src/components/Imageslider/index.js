import './imageslider.css';
import React from 'react';
import { Slide } from 'react-slideshow-image';

const fadeImages = [
	'https://rukminim1.flixcart.com/flap/3376/560/image/676ca540c0fe7dd6.jpg?q=50',
	'https://rukminim1.flixcart.com/flap/3376/560/image/b449b8dca0f0b945.jpg?q=50',
	'https://rukminim1.flixcart.com/flap/3376/560/image/9d1050658f91ceaf.jpg?q=50',
	'https://rukminim1.flixcart.com/flap/3376/560/image/98d0c64d37a5e4cc.jpg?q=50'
];

const fadeProperties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	arrows: true,
	onChange: (oldIndex, newIndex) => {
		console.log(`slide transition from ${oldIndex} to ${newIndex}`);
	}
};

const Slider = () => {
	return (
		<Slide {...fadeProperties}>
			<div className="each-fade" style={{ marginTop: 20 }}>
				<div className="image-container">
					<img src={fadeImages[0]} style={{ width: '100%' }} />
				</div>0/HR/tree/m
			</div>
			<div className="each-fade" style={{ marginTop: 20 }}>
				<div className="image-container">
					<img src={fadeImages[1]} style={{ width: '100%' }} />
				</div>
			</div>
			<div className="each-fade" style={{ marginTop: 20 }}>
				<div className="image-container">
					<img src={fadeImages[2]} style={{ width: '100%' }} />
				</div>
			</div>
			<div className="each-fade" style={{ marginTop: 20 }}>
				<div className="image-container">
					<img src={fadeImages[3]} style={{ width: '100%' }} />
				</div>
			</div>
		</Slide>
	);
};

export default Slider;
