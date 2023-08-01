import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export function Main ({children}) {
  return (
    <>  
        <Navbar/>
            {children}
        <Footer/>
    </>
  )
}
