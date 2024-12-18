// import { Link } from "react-router-dom"


// const Header =() =>{
    
//     return(
//     <>
//          {/* <header>Cities</header> */}
//          <header class="header"> 
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4Z-XnRSUormwhMx4ImtoI09rLrcQaa3G4g&s" alt="Company Logo" class="logo"/> 
//             <h1 class="company-name">E-Commerce</h1> 
//             <div class="auth-buttons"> 
//                 <Link to="sign-in"><button class="btn">sign In</button></Link>
//                 <Link to="sign-out"><button class="btn">sign Out</button></Link>
//             </div>
//             </header>
//     </>
//     ) 
//    }
// export default Header

// import React from 'react';
// import { Link } from "react-router-dom";
// import Footer from './Footer';


// const Header = () => {
//     return (
//         <>
//             <header className="header"> 
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4Z-XnRSUormwhMx4ImtoI09rLrcQaa3G4g&s" alt="Company Logo" className="logo"/> 
//                 <h1 className="company-name">E-Commerce</h1> 
//                 <div className="search-bar">
//                     <select>
//                         <option value="all">All</option>
//                         <option value="electronics">Electronics</option>
//                         <option value="fashion">Jewelery</option>
//                         <option value="home">Mens Clothing</option>
//                         <option value="beauty">Womens Clothing</option>
//                     </select>
//                     <input type="text" placeholder="Search for products, brands and more..." />
//                     <button className='btn'>Search</button>
//                 </div>
//                 <div className="auth-buttons"> 
//                     <Link to="sign-in"><button className="btn">Sign In</button></Link>
//                     <Link to="sign-out"><button className="btn">Sign Out</button></Link>
//                 </div>
//             </header>
//             <div className="nav-links">
//                 <Link to="/">Home</Link>
//                 <Link to="/tableproduct">Products</Link>
//                 <Link to="/deals">Deals</Link>
//                 <Link to="/">Contact Us</Link>
//             </div>
//             <div className="banner">
//                 Special Offers and Promotions
//             </div>
//         </>
//     ) 
// }

// export default Header;

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Footer from './Footer';

const Header = () => {
    
    return (
        <>
            <header className="header"> 
                <img src="https://thumbs.dreamstime.com/z/e-commerce-logo-design-template-white-background-e-commerce-logo-design-template-212252837.jpg" alt="Company Logo" className="logo"/> 
                <h1 className="company-name">E-Commerce Website</h1> 
                <div className="search-bar">
                    <select>
                        <option value="all">All</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Jewelry</option>
                        <option value="home">Mens Clothing</option>
                        <option value="beauty">Womens Clothing</option>
                    </select>
                    <input type="text" placeholder="Search for products, brands and more..." />
                    <button className='btn'>Search</button>
                </div>
                <div className="auth-buttons"> 
                    <Link to="sign-in"><button className="btn">Sign In</button></Link>
                    <Link to="sign-out"><button className="btn">Sign Out</button></Link>
                </div>
            </header>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/tableproduct">Products</Link>
                <Link to="/deals">Deals</Link>
                <Link to="#" >Contact Us</Link>
            </div>
            <div className="banner"> Special Offers and Discounts </div>
        </>
    );
}

export default Header;