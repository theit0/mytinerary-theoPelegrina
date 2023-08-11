import Linker from './Linker'
import '../styled-components/Nav.css'
import userSVG from '../assets/user.svg'
import Button from '../components/Button'
import { useState } from 'react'
import MenuICON from '../assets/menu.svg'
import x from '../assets/x.svg'

const Nav = () => {

    const [toggled,setToggled] = useState(false)
    const anchorClassName = toggled ? 'anchors toggled' : 'anchors';
    const linksClassName = toggled ? 'links toggled' : 'links';

    const links = [
        {content:'Home',to:'/'},
        {content:'Cities',to:'/cities'},
    ]

    return (
        <nav>
            <div className={anchorClassName}>
                <div className={linksClassName}>
                    {
                        links.map((link, index)=>{
                            return(
                                <Linker key={index} content={link.content} to={link.to}/>
                            )
                        }) 
                    }
                </div>
                <Button content='Login' to='/login'>
                    <img src={userSVG}/>
                </Button>
            </div>
            <button className='button-menu-toggler' onClick={()=>setToggled(!toggled)}>
                <img className='menu-toggler' src={toggled ? x : MenuICON} alt='Menu toggler'/>
            </button>
        </nav>
    )
}

export default Nav