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

    

    return (
        <div className='wrapper'>
            <img src={ArrowLeft} className='arrow'/>
            <ul className='carousel'>
                {
                    images.map(image => {
                       return(
                            <Card img={image.img} content={image.content}/>
                       ) 
                    })
                }
            </ul>
            <img src={ArrowRight} className='arrow'/>
        </div>
    )
}

export default Carousel