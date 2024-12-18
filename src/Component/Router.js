import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Session from "./Session";
import Signin from "./Signin";
import Signout from "./Signout";
import Jewellery from "./Jewellery";
import Electronics from "./Electronics";
import Menclothing from "./Menclothing";
import Womenclothing from './Womenclothes';
import Product from "./Product";
import Tableproduct from "./Tableproduct";
import Cart from "./Cart";
// import Footer from "./Footer";
import Deals from "./Deals";

function Router(){
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Session />}>
            <Route index element={<Product/>} />
              <Route path="sign-in" element={<Signin />} /> 
              <Route path="sign-out" element={<Signout />} />
              <Route path="tableproduct" element={<Tableproduct/>} />
              <Route path="deals" element={<Deals/>} />
              <Route path="cart/:id" element={<Cart/>} />
              <Route path="jewellery" element={<Jewellery/>} />
              <Route path="Electronics" element={<Electronics/>} />
              <Route path="Men'sclothing" element={<Menclothing/>} />
              <Route path="Women'sclothing" element={<Womenclothing/>} />
            </Route>
          </Routes>
          
        </BrowserRouter>
      );
}
export default Router