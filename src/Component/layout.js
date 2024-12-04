// import Header from "./Header"
// import Footer from "./Footer"
// import Product from "./Product"


// function Session(){
//     return(
//         <>
//         <Header/>       
//         <section>
//             <Product />
//         </section>
//         <Footer/>
//         </>
//           )
// }

// export default Session



import Header from "./Header"
import Footer from "./Footer"
import Product from "./Product"
import { Outlet } from "react-router-dom"


function Layout(){
    return(
        
        <>
        
        <Header/>       
        <section>
            <Outlet />
        </section>
        <Footer/>
        
        </>
       
          )
}

export default Layout