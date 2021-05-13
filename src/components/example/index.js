import React from 'react'
import Carousel from '../../../lib/Carousel';
require('../../global.css');

const settings = {
  loop: false,
  responsive: {
    320: {
      gutter: 10
    },
    520: {
      gutter: 20
    },
    768: {
      gutter: 20
    },
    992: {
      gutter: 20
    }
  },
  mouseDrag: true,
  controls: false,
  nav: false,
  speed: 600,
  touch: true,
  autoWidth: true,
  viewportMax: true
};

export default function SliderExample() {
  return (
    <div>
      <Carousel settings={ settings }>
        <img src='https://placekitten.com/200/300'/>
        <img src='https://placekitten.com/300/300'/>
        <img src='https://placekitten.com/400/300'/>
        <img src='https://placekitten.com/200/300'/>
        <img src='https://placekitten.com/300/300'/>
        <img src='https://placekitten.com/400/300'/>
        <img src='https://placekitten.com/200/300'/>
        <img src='https://placekitten.com/300/300'/>
        <img src='https://placekitten.com/400/300'/>
      </Carousel>
    </div>
  )
}
