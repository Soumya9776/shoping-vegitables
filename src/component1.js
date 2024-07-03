
import React from 'react';

const Component1 = ({ products, onViewSummery, onUpdateQuantity, TotalPrice }) => {
  return (
    <div className='component-1'>
      <h1>Product List</h1>
      <div id='product-list'>
        {products.map(product => (
          <div key={product.id} className='product-item'>
            <img src={product.image} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
            <div>
              <button onClick={() => onUpdateQuantity(product.id, -1)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => onUpdateQuantity(product.id, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div id='TotalPrice'>Total Price: ${TotalPrice}</div>
      <button onClick={onViewSummery}>View</button>
    </div>
  );
}

export default Component1;
