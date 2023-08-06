import '../styled-components/Card.css'


const Card = ({img,content}) => {

  return (
    <div className='card-container'>
        <img src={img}/>
        <span>{content}</span>
    </div>
  )
}

export default Card