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
           <img src='https://media.istockphoto.com/id/1198614721/photo/stylish-and-modern-composition-of-living-room-with-design-gray-armchair-gold-liquor-cabinet.jpg?s=612x612&w=0&k=20&c=MnHlwdfKKNMYdypqDVdY4mt1NmUtqkSI0RMvOf44Jrk='/>
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