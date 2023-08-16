import '../styled-components/CityCard.css'
import Button from '../components/Button'

const CityCard = ({id,img,content}) => {



  return (
    <div className='city-card-container'>
        <img src={img}/>
        <span>{content}</span>
        <Button to={`/cities/${id}`}>
          View more
        </Button>
    </div>
  )
}

export default CityCard