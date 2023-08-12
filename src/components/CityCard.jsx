import '../styled-components/CityCard.css'
import Button from '../components/Button'

const CityCard = ({img,content,id}) => {

  const cityDetail = `/cities/${id}`;

  return (
    <div className='city-card-container'>
        <img src={img}/>
        <span>{content}</span>
        <Button to={cityDetail}>
          View more
        </Button>
    </div>
  )
}

export default CityCard