import '../styled-components/Itinerary.css'
import Button from './Button'
import User from '../assets/user.png'

const Itinerary = ({name,by,img,price,hastags,duration,likes}) => {
  return (
    <div className='itinerary'>
        <div className='itinerary-name-container'>
          <h2>{name}</h2>
        </div>
        <div className='itinerary-by'>
          <img src={User} height={50} />
          <h2>{by}</h2>
        </div>
        <div className='itinerary-tags'>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
            </svg>
            <span>{ duration===1 ? `${duration} hour` : `${duration} hours` }</span>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
              <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
              <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
            </svg>
            <span>{`${price} tickets`}</span>
          </span>
        </div>
        <div className='itinerary-hastags'>
            {
              hastags.map((h) => {
                return (
                  <p>#{h}</p>
                )
              })
            }
        </div>
        <div className="itinerary-viewmore">
            <Button content='View more' to='/' />
        </div>
        <div className='itinerary-likes'>
            <span>{likes}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
            </svg>
        </div>
    </div>
  )
}

export default Itinerary