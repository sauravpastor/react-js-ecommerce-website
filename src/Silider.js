import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
    'images/slider_addidas.png',
    'images/slider_NB.webp',
    'images/slider_puma.jpg',
    'images/slider_nikes.webp',
    'images/slider_addidas22.webp'
];

const Slideshow = () => {
    return (
        <center>
      <div className="slide-container" >
        <Zoom scale={0.1}>
          {
            images.map((each, index) => <img key={index} style={{width: "93.5%" , height:"530px"}} src={each} />)
          }
        </Zoom>
      </div>
      </center>
    )
}

export default Slideshow;