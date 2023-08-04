import '../styled-components/Carousel.css'
import img1 from '../assets/a-man-brushes-ferns-out-of-his-path-in-a-botanical-space.jpg'
import img2 from '../assets/desert-wanderer.jpg'
import img3 from '../assets/middle-eastern-building.jpg'
import img4 from '../assets/person-stands-on-rocks-poking-out-of-the-ocean-shoreline.jpg'
import img5 from '../assets/tourists-visit-an-intricate-structure.jpg'
import img6 from '../assets/camels-resting.jpg'
import img7 from '../assets/eiffel-tower-on-cloudy-day.jpg'
import img8 from '../assets/hike-by-a-smoky-river.jpg'
import img9 from '../assets/apartments-overlooking-a-canal.jpg'
import Card from './Card'
import ArrowLeft from '../assets/chevron-left.svg'
import ArrowRight from '../assets/chevron-right.svg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'


const Carousel = () => {
    const images = [
        {img: img1 , content:'Tokyo, Japan'},
        {img: img2 , content:'New York, USA'},
        {img: img4 , content:'London, UK'},
        {img: img5 , content:'Seoul, South Korea'},
        {img: img6 , content:'Nueva Delhi, India'},
        {img: img3 , content:'Baku, Azerbaijan'},
        {img: img7 , content:'Paris, France'},
        {img: img8 , content:'Buenos Aires, Argentina'},
        {img: img9 , content:'Vienna, Austria'},
    ]
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
        <div className='wrapper'>
            <Slider {...settings}>
                {
                  images.map(image => {
                      return(
                        <div className='slide-container'>
                            <Card img={image.img} content={image.content}/>
                        </div>
                      ) 
                  })
                }
            </Slider>
        </div> 
        
      )
}

export default Carousel