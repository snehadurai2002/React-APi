import React, { useState, useEffect } from 'react';
import Delete from './Delete';
import Edit from './Edit';

function Tableproduct(){
      const [products, setProducts] = useState([]);
    
      useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(json => setProducts(json))
          .catch(error => console.error('Error fetching products:', error));
      }, []);
    
      return (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Image</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="product-image" 
                    style={{ width: '50px', height: '50px' }} 
                  />
                </td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>
                <button className='btn' onClick={() => Delete(product.id, setProducts)}>Delete</button>
                    <br/>
                    <br/>
                    <button className='btn' onClick={Edit}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );   
}
export default Tableproduct