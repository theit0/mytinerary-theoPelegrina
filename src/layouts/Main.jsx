import { Footer } from "../components/Footer"
import Navbar from "../components/navbar"
import {Outlet} from 'react-router-dom'

export function Main () {
  return (
    <> 
      <Navbar/>
          <Outlet/>
      <Footer/>
    </>
  )
}
export default Main