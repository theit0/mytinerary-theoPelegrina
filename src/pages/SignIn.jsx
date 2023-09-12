import { useDispatch, useSelector } from "react-redux"
import { user_login, user_login_google } from "../store/actions/userActions";
import '../styled-components/Login.css'
import { useState } from "react";
import GoogleSignIn from "../components/GoogleSignIn";
import Logo from '../components/Logo'


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

    }

    const handleInput = (event) => {
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        })
    }

    console.log(formData)


    return (
        <div className="signin-section">
            <form onSubmit={handleSignIn}>
                <Logo/>
                <div>
                    <label>Email</label>
                    <input name="email" onChange={handleInput} type="email" placeholder="Enter email"/>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" onChange={handleInput} type="password" placeholder="Enter password"/>
                </div>
                <button>
                    Sign in
                </button>
                    
                
                <GoogleSignIn></GoogleSignIn>

                <span className="create-acc">
                    Don't have any? <a href="/signup">Create a free account</a>
                </span>
            </form>
        </div>
    )
}

export default SignIn