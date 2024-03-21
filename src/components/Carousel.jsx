import '../styled-components/Carousel.css';
import Card from './Card';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Carousel = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Variable de estado para controlar el estado de carga
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const configs = {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                };
                const response = await axios.get('https://mytinerary-back-theopelegrina.onrender.com/api/cities', configs);
                setData(response.data.cities.slice(0, 12));
                setLoading(false); // Cuando se completa la carga, establece loading en false
            } catch (error) {
                console.error('Error fetching cities:', error);
                setLoading(false); // En caso de error, también detenemos el loader
            }
        };
        fetchData();
    }, []);

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
            {loading ? ( // Mostrar la caja gris mientras se carga
                <div className="loading-placeholder"></div>
            ) : (
                <Slider {...settings}>
                    {data.map(city => (
                        <div className='slide-container' key={city._id}>
                            <Card img={city.img} content={`${city.name}, ${city.country}`} />
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
}

export default Carousel;
