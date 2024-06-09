import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Constant from '../../Constant'


export const MainCarousel = () => {
    const items = Constant.MAINCAROUSELDATA.map((item)=> <img src={item.images} alt={item.path} 
     className='cursor-pointer' role='presentation'/>)
 
   return  <AliceCarousel
            mouseTracking
            items={items}
            controlsStrategy="alternate"
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000} 
            infinite />
}