import { Footer } from "../components/Footer"
import Navbar from "../components/navbar"

export function Main ({children}) {
  return (
    <> 
      <Navbar/>
        {children}
      <Footer/>
    </>
  )
}
