import React from 'react';
import { Carousel } from 'react-bootstrap'
import banner1 from '../../assets/images/banners/banner-1.jpg.jpg'
import banner2 from '../../assets/images/banners/banner-2.png'
import banner3 from '../../assets/images/banners/banner-3.jpg'

export const BootsCarousel = () => {
  return (
    <div>
        <Carousel className='contenedor-carrusel'>
  <Carousel.Item className="contenedor-carrusel-item">
    <img
      className="d-block w-100 img-bootstrap"
      src={ banner1 }
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item className="contenedor-carrusel-item">
    <img
      className="d-block w-100 img-bootstrap"
      src={ banner2 }
      alt="Second slide"
    />
  </Carousel.Item>

  <Carousel.Item className="contenedor-carrusel-item">
    <img
      className="d-block w-100 img-bootstrap"
      src={ banner3 }
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    </div>
  )
}
