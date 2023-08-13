import '../styled-components/CityDetail.css'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import Button from '../components/Button'

const CityDetail = () => {
  const { id } = useParams();
  const [city, setCity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/cities/`);
        const cities = response.data.cities;
        if (cities && cities[id]) {
          setCity(cities[id]);
        } else {
          console.error(`City with ID ${id} not found`);
        }
      } catch (error) {
        console.error('Error fetching city:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
      <div className='city-detail-container'>
        {city ? (
          <div className='detail-container'>
            <div className='detail-img-container'>
                <img src={city.img} alt={city.name} />
                <div className='span-container'>
                  <Link to='/cities'>
                  Go back &#x25C0;
                  </Link>
                  <span>{city.descr}</span>
                </div>
            </div>
            <h1>{`${city.name}, ${city.country}`}</h1>
          </div>
        ) : (
          <Loading/>
        )}
      </div>

     
  );
}

export default CityDetail;
