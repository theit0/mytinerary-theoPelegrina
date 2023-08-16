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
      axios.get('http://localhost:3000/api/cities')
      .then(response => {
        setData(response.data.cities)
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
            placeholder='SEARCH FOR CITIES'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button  onClick={() => getCities()}>Search</button>
        </div>
      </div>
      <div className='cities-cards-container'>
          { found &&
            data.map((city) => {
              return(
                <CityCard img={city.img} content={`${city.name}, ${city.country}`} id={city._id}/>
              )
            }) 
          }
          {
            !found &&
            <div className='not-found-container'>
              <span>
                No cities were found.
              </span>
            </div>
          }
      </div>
    </div>
    
    
  )
}

export default Cities