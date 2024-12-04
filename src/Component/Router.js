// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Session from "./Session";
// import Signin from "./Signin";
// import Signout from "./Signout";



// function Router(){
//     return (
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Session />}>
//               <Route path="sign-in" element={<Signin />} /> 
//               <Route path="sign-out" element={<Signout />} />
//             </Route>
//           </Routes>
//         </BrowserRouter>

//       );
// }
// export default Router




import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Session from "./Session";
import Signin from "./Signin";
import Signout from "./Signout";
import Jewelery from './Jewellery';
import Electronics from "./Electronics";
import Menclothing from "./Menclothing";
import Womenclothes from "./Womenclothes";
// import Pop from "./Pop";
import Product from './Product';
import Layout from './layout';
import Tableproduct from "./Tableproduct";
import Cart from "./Cart";

function Router(){
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Product />} /> 
              <Route path="sign-in" element={<Signin />} /> 
              <Route path="sign-out" element={<Signout />} />
              <Route path="Jewelery" element={<Jewelery/>} />
              <Route path="Electronics" element={<Electronics/>} />
              <Route path="tableproduct" element={<Tableproduct/>} />
              <Route path="cart/:id" element={<Cart/>} />
              <Route path="Men's clothing" element={<Menclothing/>} />
              <Route path="Womenclothes" element={<Womenclothes/>} />
            <Route path="product1" element={<product1/>}/>
              {/* <Route path="popup" element={<popup/>}  /> */}
            </Route>
          </Routes>

        </BrowserRouter>
      );
}
export default Router