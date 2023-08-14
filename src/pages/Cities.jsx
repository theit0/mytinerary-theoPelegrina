import { useState } from 'react'
import '../styled-components/Cities.css'
import { useEffect } from 'react';
import axios from 'axios';
import Title from '../components/Title'
import CityCard from '../components/CityCard';
import zoom from '../assets/zoom-filled.svg'
import Button from '../components/Button';

const Cities = () => {

  const [searchValue,setSearchValue] = useState(null)
  const [data,setData] = useState([]);
  const [found,setFound] = useState(true)

  useEffect(() => {
      const configs = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      axios.get('http://localhost:3000/api/cities',configs)
      .then(response => {
        setData(response.data.cities)
        console.log(response.data.cities)
      })
      .catch(err => {
        console.log(err)
      })
  },[]);

  const getCities = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/cities', {
        params: { name: searchValue },
      });
      setData(response.data.cities)
      setFound(true)
    } catch (error) {
      setFound(false)
    }
  };

  return (
    <div className='cities-container'>
      <div className='cities-title-container'>
        <Title content='Cities'/>
        <div className='search-container'>
        <input
          type='text'
          className='search-input'
          placeholder='SEARCH FOR CITIES&#128269;'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
          <button  onClick={() => getCities()}>Filter</button>
        </div>
      </div>
      <div className='cities-cards-container'>
          { found &&
            data.map((city,index) => {
              return(
                <CityCard img={city.img} content={`${city.name}, ${city.country}`} id={index}/>
              )
            }) 
          }
          {
            !found &&
            <div className='not-found-container'>
              <span>{`No se encontro ninguna ciudad con el nombre "${searchValue}".`}</span>
            </div>
          }
      </div>
    </div>
    
    
  )
}

export default Cities