import { useDispatch, useSelector } from "react-redux"
import { user_login } from "../store/actions/userActions";
import '../styled-components/Login.css'
import { useState } from "react";
import axios from "axios";



const SignIn = () => {
    const store=useSelector(store=>store.userReducer)
    console.log('Viene del store',store)

    const dispatch = useDispatch();

    const [formData,setFormData] = useState({
        email: '',
        password:''
    })


    const handleSignIn = async (event) => {
        event.preventDefault();

        try {
            dispatch(user_login({
                data:formData
            }))
        } catch (error) {
            console.log(error)
        }

        /* const user = {
            photo : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/220px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg'
        }
        
        dispatch(user_photo(user)) */
    }

    const handleInput = (event) => {
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        })
    }

    console.log(formData)


    return (
    <div>
        <form onSubmit={handleSignIn}>
            <input name="email" onChange={handleInput} type="email" placeholder="Enter email"/>
            <input name="password" onChange={handleInput} type="password" placeholder="Enter password"/>
            <button>
                SignIn
            </button> 
        </form>
    </div>
    )
}

export default SignIn