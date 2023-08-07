import '../styled-components/Popular.css'
import Carousel from './Carousel'

const Popular = () => {
  return (
    <section className='popular-section'>
        <div className='popular-container'>
            <h1>Popular MyTineraries.</h1>
            <span>Collection of the most beautiful places and experience.</span>
        </div>
        <Carousel/>
    </section>
  )
}

export default Popular