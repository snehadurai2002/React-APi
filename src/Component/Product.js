import React, { useState, useEffect } from 'react';
import Router from './Router';
import { Link } from 'react-router-dom';


function Product() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <>
    <div className='design-product'>
    <div className="card-product-container">
      {categories.map((category) => (
        <div key={category} className="product-card">
           <img src='https://images.unsplash.com/photo-1733280881956-849e1c2b24bf?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
          <Link to={category}> 
          <button className="btn">View {category} </button> </Link>
        </div>
      ))}
    </div>
    </div>
    </>
  );
}
// target='_blank'
export default Product;