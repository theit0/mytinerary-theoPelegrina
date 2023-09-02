import '../styled-components/CityDetail.css';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import Itinerary from '../components/Itinerary';
import { useDispatch, useSelector } from 'react-redux';
import { get_city } from '../store/actions/cityActions';

const CityDetail = () => {
  const { id } = useParams();
  const city = useSelector(store => store.cityReducers.city)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(get_city(id))
  }, []);

  return (
    <div className='city-detail-container'>
      {city ? (
        <div className='detail-container'>
          <div className='detail-img-container'>
            <img src={city.img} alt={city.name} />
            <div className='span-container'>
              <Link to='/cities'>
                  Go back
              </Link>
              <span>{city.descr}</span>
            </div>
          </div>
          <h1>{`${city.name}, ${city.country}`}</h1>
        </div>
      ) : (
        <Loading />
      )}
      <div className='city-itineraries'>
        { 
          city.itineraries && city.itineraries.map((it) => {
            return (
              <Itinerary img={it.img} name={it.name} by={it.by} price={it.price} hastags={it.hastags} duration={it.duration} likes={it.likes}/>
            )
          })
        }
      </div>
    
    </div>
  );
}

export default CityDetail;


