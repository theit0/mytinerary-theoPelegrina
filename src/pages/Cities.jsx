import { useState } from 'react'
import '../styled-components/Cities.css'
import { useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card'
import Slider from "react-slick";
import Title from '../components/Title'

const Cities = () => {

  const [data,setData] = useState([]);
  
  useEffect(() => {
      const configs = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      axios.get('http://localhost:3000/api/cities',configs)
      .then(response => {
        setData(response.data)
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
    <div className='cities-container'>
      <div className='cities-title-container'>
        <Title content='Cities.'/>
        <span>Collection of the most beautiful places and experience.</span>
      </div>
      
      {/* <div className='cards-container'>
        <Slider {...settings} >
          {
            data.map((city) => {
              return(
                <Card img={city.img} content={`${city.name}, ${city.country}`}/>
              )
            })
          }
        </Slider>
      </div> */}
    </div>
    
    
  )
}

export default Cities