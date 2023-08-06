import '../styled-components/Footer.css'
import Link from '../components/Link'
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import Tiktok from '../assets/tiktok.svg'
import Youtube from '../assets/youtube.svg'
import Social from './Social'

export function Footer() {
  
    const socials = [
        {source:Youtube ,ref:'https://www.youtube.com/'},
        {source:Facebook ,ref:'https://www.facebook.com/'},
        {source:Instagram ,ref:'https://www.instagram.com/'},
        {source:Tiktok,ref:'https://www.tiktok.com/'}
    ]

    return(

        <footer>

            <div className='footer-links'>
                <div className='footer-policies'>
                    <Link content='Terms of service' to='/terms-of-service'/>
                    <Link content='Privacy Policy' to='/privacy-policy'/>
                    <Link content='Sitemap' to='https://www.google.com/maps/?hl=es'/>
                </div>
                <div className='footer-menu'>
                    <Link content='Go home' href='/home'/>
                    <Link content='Cities' href='/cities'/>
                </div>
            </div>

            <div className='footer-socials'>
                {
                    socials.map((social)=>{
                        return(
                            <Social source={social.source} refr={social.ref}/>
                        )
                    })
                }
            </div>

        </footer>
    )
}