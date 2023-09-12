import axios from "axios";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user_login_google } from "../store/actions/userActions";

const GoogleSignIn = () => {
    
    const dispatch = useDispatch();


    const googleButton = useRef();

    const handleCredentialResponse = async (response) =>{
        //console.log("Encoded JWT ID token: " + response.credential);
        const data = {
            token_id: response.credential
        }

        try {
            dispatch(user_login_google({
                data:data
            }))
        } catch (error) {
            console.log(error)
        }

        const userResponse = await axios.post('http://localhost:3000/api/auth/google',data)
        console.log(userResponse)
    }

    useEffect(() => {
        window.onload = function () {
            google.accounts.id.initialize({
              client_id: '763167240758-esbk3973ikbv5q7aj4jiff5f8uprl4o1.apps.googleusercontent.com',
              callback: handleCredentialResponse
            });
            google.accounts.id.renderButton(
                googleButton.current,
              { theme: "outline", size: "large" }  // customization attributes
            );
        }
    }, []);


    return (
        <div ref={googleButton}>GoogleSignIn</div>
    )
}

export default GoogleSignIn