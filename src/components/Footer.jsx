import '../styled-components/Footer.css'
import Link from '../components/Link'
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import Tiktok from '../assets/tiktok.svg'
import Youtube from '../assets/youtube.svg'

export function Footer() {
  return(
      <footer>

          <div className='footer-links'>
              <Link content='Terms of service' href='/terms-of-service'/>
              <Link content='Privacy Policy' href='/privacy-policy'/>
              <Link content='Sitemap' href='/sitemap'/>
          </div>

          <div className='footer-socials'>
              <a  href='https://www.youtube.com/'><img src={Facebook}/></a>
              <a  href='https://www.facebook.com/'><img src={Instagram}/></a>
              <a  href='https://www.instagram.com/'><img src={Tiktok}/></a>
              <a  href='https://www.tiktok.com/'><img src={Youtube}/></a>
          </div>

      </footer>
  )
}