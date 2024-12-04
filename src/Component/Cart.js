import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Popup from './Popup';

function Cart() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch data for the specific item
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => setItem(json))  // Update the state with fetched data
        .catch(error => console.error('Error fetching item:', error));
    }
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <h3>ID={item.id}</h3>
      <hr />
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} className="item-image" />
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <button className="btn" onClick={() => Popup}>Buy Now</button>
    </div>
  );
}

export default Cart;