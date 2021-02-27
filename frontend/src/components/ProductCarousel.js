import React from 'react'
import { Link } from 'react-router-dom'
import {carouselImages} from '../carouselImg'
import { Carousel} from 'react-bootstrap'


const ProductCarousel = () => {
   return  (
    <Carousel pause='hover'>
    {carouselImages.map(img=> <Carousel.Item key={img._id} >
        <div className="px-lg-5 slider" style={{background: img.background}}>
          <div className="d-lg-flex justify-content-between align-items-center ps-lg-4"><img className="d-block order-lg-2 me-lg-n5 flex-shrink-0" src={img.src} alt="Summer Collection" />
            <div className="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1" style={{maxWidth: img.maxWidth, zIndex: img.zIndex}}>
              <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                <h3 className="h2 text-light fw-light pb-1 from-start">{img.h3Text}</h3>
                <h2 className="text-light display-5 from-start delay-1">{img.h2Text}</h2>
                <p className="fs-lg text-light pb-3 from-start delay-2">{img.pText}</p>
                <div className="d-table scale-up delay-4 mx-auto mx-lg-0"><a className="btn btn-primary" href="shop-grid-ls.html">{img.buttonText}<i className="ci-arrow-right ms-2 me-n1"></i></a></div>
              </div>
            </div>
          </div>
        </div>
        </Carousel.Item>)}
     
      
    </Carousel>
  )
}

export default ProductCarousel
