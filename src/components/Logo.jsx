import logo from '../assets/logoMyTinerary.png'
import '../styled-components/Logo.css'

export default function Logo() {
  return (
    <a href='#' className='logo-anchor'>
      <img className='logo' src={logo} alt='MyTinerary logo'/>
    </a>
  )
}