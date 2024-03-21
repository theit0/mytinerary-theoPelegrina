import { useState, useRef } from 'react';
import '../styled-components/Cities.css';
import { useEffect } from 'react';
import Title from '../components/Title';
import CityCard from '../components/CityCard';
import { useDispatch, useSelector } from 'react-redux';
import { filter_cities, get_cities } from '../store/actions/cityActions';
import Loading from '../components/Loading'; // Importa el componente de Loading

const Cities = () => {
  const [loading, setLoading] = useState(true); // Variable de estado para controlar el estado de carga
  const cities = useSelector(store => store.cityReducers.cities);
  
  let inputSearch = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_cities())
    .then(() => setLoading(false)) // Cuando las ciudades se carguen, establece loading en false
    .catch(error => {
      console.error('Error fetching cities:', error);
      setLoading(false); // En caso de error, también detenemos el loader
    });
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(
      filter_cities({
        name: inputSearch.current.value.trim(' ')
      })
    );
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
        {loading ? ( // Mostrar el loader mientras se carga
          <Loading />
        ) : cities.length > 0 ? ( // Mostrar las ciudades si hay alguna
          cities.map(city => (
            <CityCard img={city.img} content={`${city.name}, ${city.country}`} id={city._id} key={city._id} />
          ))
        ) : ( // Mostrar un mensaje si no hay ciudades
          <div className='not-found-container'>
            <span>No cities found</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cities;
