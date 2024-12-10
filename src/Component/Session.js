import Header from "./Header"
import Footer from "./Footer"
import Product from "./Product"
import { Outlet } from "react-router-dom"

function Session(){
    return(        
       <>        
       <Header/>       
        <section>
            <Outlet />
        </section>
        <Product/>
        <Footer/>
        </> 
    )  
}
export default Session;