import '../styled-components/Carousel.css'
import Card from './Card'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const Carousel = () => {

    const [data,setData] = useState([]);
    
    useEffect(() => {
        const configs = {
          headers: {
            'Content-Type': 'application/json',
          }
        };
        axios.get('https://mytinerary-back-theopelegrina-production.up.railway.app/api/cities',configs)
        .then(response => {
          setData(response.data.cities.slice(0,12))
        })
        .catch(err => {
          console.log(err)
        })
    },[]);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
        <div className='wrapper'>
            <Slider {...settings}>
                {
                  data.map(city => {
                      return(
                        <div className='slide-container'>
                            <Card img={city.img} content={`${city.name}, ${city.country}`}/>
                        </div>
                      ) 
                  })
                }
            </Slider>
        </div> 
        
      )
}

export default Carousel