import { useDispatch } from "react-redux"
import { user_photo } from "../store/actions/userActions";
import '../styled-components/Login.css'



const SignIn = () => {
    const dispatch = useDispatch();

    const handleSignIn = () => {
        //Simulo que mi usuario se logueo correctamente
        //Simulo que obtengo los datos del usuario (photo)
        //Utilizo el dispatch para enviar esa informacion(disparar el evento del action)
        //Y que el reducer haga el cambio de estado
        
        const user = {
            photo : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/220px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg'
        }
        
        dispatch(user_photo(user))
    }

    return (
    <div>
        <div className='login-container'>
        <h1>Login page under construction.</h1>
        </div>
        {/* <button onClick={handleSignIn}>
            SignIn
        </button> */}
    </div>
    )
}

export default SignIn