import React from 'react'
import Images from './img/collectionofpic'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselStyle from './carousel.module.css'
import {Carousel} from 'react-responsive-carousel'

function CarouselSlide() {
    // console.log(Images)


    return (
        <>

                <Carousel  
                   autoPlay={true}
                   infiniteLoop={true}
                   showIndicators={false}
                   showThumbs={false}
                >
                           
                           {
                              Images.map((item,index)=>{return <img key={index} src={item} />})
                           }

                       
                </Carousel>

                <div className={CarouselStyle.fade_effect}></div>

        </>
    )


}

export default CarouselSlide