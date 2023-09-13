import { useDispatch, useSelector } from "react-redux"
import { user_login, user_login_google } from "../store/actions/userActions";
import '../styled-components/Login.css'
import { useState } from "react";
import GoogleSignIn from "../components/GoogleSignIn";
import Logo from '../components/Logo'
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SignIn = () => {
    const store=useSelector(store=>store.userReducer)


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
                    Don't have any? <Link to="/signup">Create a free account</Link>
                </span>
            </form>
        </div>
    )
}

export default SignIn
