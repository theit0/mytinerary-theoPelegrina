import '../styled-components/CityCard.css'


const CityCard = ({img,content}) => {

  return (
    <div className='city-card-container'>
        <img src={img}/>
        <span>{content}</span>
    </div>
  )
}

export default CityCard