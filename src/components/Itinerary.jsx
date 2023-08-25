import '../styled-components/Itinerary.css'

const Itinerary = ({name,by,price,hastags,likes}) => {
  return (
    <div>
        <h2>{name}</h2>
        <span>{by}</span>
    </div>
  )
}

export default Itinerary