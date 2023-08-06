import '../styled-components/Footer.css'
import Link from '../components/Link'

export function Footer() {
  return(
      <footer>

          <div className='footer-links'>
              <Link content='Terms of service'/>
              <Link content='Privacy Policy'/>  
              <Link content='Sitemap'/>
          </div>

          <div className='footer-socials'>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
          </div>

      </footer>
  )
}