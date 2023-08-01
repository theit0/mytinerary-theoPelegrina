import Link from './Link'
import '../styled-components/Nav.css'
import userSVG from '../assets/user.svg'
import Button from '../components/Button'

const Nav = () => {

    const links = [
        {content:'Home',to:'/home'},
        {content:'Cities',to:'/cities'},
    ]

    return (
        <nav>
            {
                links.map((link)=>{
                    return(
                        <Link content={link.content} to={link.to}/>
                    )
                }) 
            }
            <Button icon={userSVG} content='Login'/>
        </nav>
    )
}

export default Nav