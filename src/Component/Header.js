// const Header =() =>{
    
//     return(
//     <>
//          {/* <header>Cities</header> */}
//          <header class="header"> 
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJc-kxhH7hFPOh4cDOLyfk9oMeGhBclA0pog&s" alt="Company Logo" class="logo"/> 
//             <h1 class="company-name">Company Name</h1> 
//             <div class="auth-buttons"> 
//                 {/* <a href= "Signin" target="_blank"><button class="btn">sign In</button></a> */}
//                 {/* <Link to="sign-in"><button class="btn">sign In</button></Link> */}
//                 {/* <button className="btn" onClick={handleSignInClick}>Sign In</button> */}
//                 <button class="btn">Sign In</button> 
//                 <button class="btn">Sign Out</button> 

//             </div>
//             </header>
//     </>
//     ) 



//    }
// export default Header


import { Link } from "react-router-dom"


const Header =() =>{
    
    return(
    <>
         {/* <header>Cities</header> */}
         <header class="header"> 
            <img src="https://tse2.mm.bing.net/th?id=OIP.Jc4_fewy2DM4SNzlqWDRYAHaHa&pid=Api&P=0&h=180" alt="Company Logo" class="logo"/> 
            <h1 class="company-name">E-commerce</h1> 
            <div class="auth-buttons"> 
                <Link to="sign-in"><button class="btn">Sign In</button></Link>
                <Link to="sign-out"><button class="btn">Sign Out</button></Link>
            </div>
            </header>
    </>
    ) 
   }
export default Header