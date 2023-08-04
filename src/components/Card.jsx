import '../styled-components/Card.css'



const Card = ({img,content}) => {
  return (
    <li className='card-container'>
        <img src={img}/>
        <span>{content}</span>
    </li>
  )
}

export default Card