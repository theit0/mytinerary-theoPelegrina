import Linker from './Linker'
import '../styled-components/Nav.css'
import userSVG from '../assets/user.svg'
import logoutSVG from '../assets/logout.svg'
import Button from '../components/Button'
import { useState } from 'react'
import MenuICON from '../assets/menu.svg'
import x from '../assets/x.svg'
import { useDispatch, useSelector } from 'react-redux'
import { user_logout } from '../store/actions/userActions'


const Nav = () => {

    const [toggled,setToggled] = useState(false)
    const user = useSelector(store=>store.userReducer.user)
    const anchorClassName = toggled ? 'anchors toggled' : 'anchors';
    const linksClassName = toggled ? 'links toggled' : 'links';

    const dispatch=useDispatch();

    const token = localStorage.getItem('token');

    const links = [
        {content:'Home',to:'/'},
        {content:'Cities',to:'/cities'},
    ]

    const handleSignOut = async (event) => {
        event.preventDefault();

        try {
            dispatch(user_logout(token))
        } catch (error) {
            console.log(error)
        }
    }

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
                {
                    user 
                    &&
                    <button className='button' onClick={handleSignOut}>
                        <img src={logoutSVG}/>
                        Logout
                    </button>
                }
                {   
                    !user 
                    &&
                    <Button content='Login' to='/login'>
                        <img src={userSVG}/>
                    </Button>
                }
                
            </div>
            <button className='button-menu-toggler' onClick={()=>setToggled(!toggled)}>
                <img className='menu-toggler' src={toggled ? x : MenuICON} alt='Menu toggler'/>
            </button>
            
            {
                user 
                &&
                <img src={user.image}  className='user-icon'/>
            }
            
        </nav>
    )
}

export default Nav