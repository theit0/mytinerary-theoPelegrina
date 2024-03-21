
import '../styled-components/Login.css'
import { useState } from "react";
import GoogleSignIn from "../components/GoogleSignIn";
import Logo from '../components/Logo'
import axios from "axios";
import Swal from 'sweetalert2';

const SignUp = () => {
    const [formData,setFormData] = useState({
        name: '',
        image:'',
        email: '',
        password:''
    })


    const [redirectToLogin, setRedirectToLogin] = useState(false);


    const handleSignUp = async (event) => {
        event.preventDefault();
        try {  

            const data = await axios.post('https://mytinerary-back-theopelegrina.onrender.com/api/auth/signup',formData)

            Swal.fire({
                title: '¡Perfect!',
                text: 'User successfully registered ',
                icon: 'success',
                confirmButtonText: 'Continue'
            })
        } catch (error) {
            Swal.fire({
                title: 'Ooops',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Continue'
            })
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
            <form onSubmit={handleSignUp}>
                <Logo/>
                <div>
                    <label>Name</label>
                    <input name="name" onChange={handleInput} type="text" placeholder="Enter name"/>
                </div>
                <div>
                    <label>Email</label>
                    <input name="email" onChange={handleInput} type="email" placeholder="Enter email"/>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" onChange={handleInput} type="password" placeholder="Enter password"/>
                </div>
                <div>
                    <label>Photo URL</label>
                    <input name="image" onChange={handleInput} type="text" placeholder="Enter URL"/>
                </div>
                
                <button>
                    Sign up
                </button>
                    
                
                <GoogleSignIn></GoogleSignIn>
            </form>
        </div>
    )
}

export default SignUp
