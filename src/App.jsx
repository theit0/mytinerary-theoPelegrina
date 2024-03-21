import {RouterProvider} from 'react-router-dom'
import router from './router/router'
import '../src/App.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { user_token } from './store/actions/userActions'


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem('token')

    if(token){
      let configs = { headers: {'Authorization':`Bearer ${token}`} }
      

      axios.post('https://mytinerary-back-theopelegrina.onrender.com/api/auth/token',null,configs)


        .then(response => dispatch(user_token(response.data.user)))
        .catch(error=>console.log(error))
    }
    
  }, [])
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
