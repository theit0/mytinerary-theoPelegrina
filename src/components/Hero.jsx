import '../styled-components/Hero.css'
import Button from '../components/Button'
import Title from './Title'
import CoverPhoto from '../assets/middle-eastern-building.jpg'

const Hero = () => {
  return (
    <section className='hero-section'>
        <div className='hero-text'>
            <Title content='Find the perfect destination.' />
            <span className='subtitle'>
                Our app will help you find the perfect path for your next trip. With an easy-to-use 
                interface and a host of itinerary options, planning your next trip has never been easier.
            </span>
            <Button content='View more'/>
        </div>
        <div className='cover-container'>
          <img className='cover-photo' src={CoverPhoto} alt='middle eastern building'/>
        </div>
    </section> 
    
  )
}

export default Hero