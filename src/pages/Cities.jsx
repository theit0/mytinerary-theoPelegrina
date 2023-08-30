import { useState,useRef } from 'react'
import '../styled-components/Cities.css'
import { useEffect } from 'react';
import Title from '../components/Title'
import CityCard from '../components/CityCard';
import { useDispatch, useSelector } from 'react-redux';
import { filter_cities, get_cities } from '../store/actions/cityActions';

const Cities = () => {

  const cities = useSelector(store => store.cityReducers.cities)
  
  let inputSearch =  useRef();

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(get_cities())
  },[dispatch]);

  const handleSearch =  () => {
      dispatch(
        filter_cities({
          name:inputSearch.current.value
        })
      )
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
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className='cities-cards-container'>
          { 
            cities.length > 0 
            ?
            cities.map((city) => {
              return(
                <CityCard img={city.img} content={`${city.name}, ${city.country}`} id={city._id}/>
              )
            }) 
            :
            <div className='not-found-container'>
              <span>
                No cities found
              </span>
            </div>
          }
      </div>
    </div>
    
  )
}

export default Cities