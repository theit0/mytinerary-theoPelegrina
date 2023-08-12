import { useState } from 'react'
import '../styled-components/Cities.css'
import { useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card'
import Slider from "react-slick";
import Title from '../components/Title'
import CityCard from '../components/CityCard';

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
        setData(response.data.cities)
      })
      .catch(err => {
        console.log(err)
      })
  },[]);


  return (
    <div className='cities-container'>
      <div className='cities-title-container'>
        <Title content='Cities'/>
      </div>
      
      <div className='cities-cards-container'>
          {
            data.map((city,index) => {
              return(
                <CityCard img={city.img} content={`${city.name}, ${city.country}`} id={index}/>
              )
            })
          }
      </div>
    </div>
    
    
  )
}

export default Cities