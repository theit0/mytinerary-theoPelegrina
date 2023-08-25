import { useState,useRef } from 'react'
import '../styled-components/Cities.css'
import { useEffect } from 'react';
import axios from 'axios';
import Title from '../components/Title'
import CityCard from '../components/CityCard';

const Cities = () => {

  const [data,setData] = useState([]);
  const [inputValue,setInputValue] = useState('')

  let inputSearch =  useRef();


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
    const name = inputSearch.current.value
    try {
      const response = await axios.get(`http://localhost:3000/api/cities?name=${name}`);
      setData(response.data.cities)
    } catch (error) {
      if(error.response.status === 404){
        setData([])
        setInputValue(name)
      } else {
        console.log(error)
      }
    }
  };

  return (
    <div className='cities-container'>
      <div className='cities-title-container'>
        <Title content='Cities'/>
        <div className='search-container'>
          <input
            ref={inputSearch}
            type='text'
            className='search-input'
            placeholder='SEARCH FOR CITIES'
          />
          <button onClick={getCities}>Search</button>
        </div>
      </div>
      <div className='cities-cards-container'>
          { 
            data.length > 0 
            ?
            data.map((city) => {
              return(
                <CityCard img={city.img} content={`${city.name}, ${city.country}`} id={city._id}/>
              )
            }) 
            :
            <div className='not-found-container'>
              <span>
                {`City not found with name ${inputValue}`}
              </span>
            </div>
          }
      </div>
    </div>
    
  )
}

export default Cities