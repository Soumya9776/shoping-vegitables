
import React from 'react';

const Component2 = ({ products, onBack, onRemove }) => {
  const summeryProducts = products.filter(product => product.quantity > 0);

  return (
    <div className="component-2">
      <h1>Product Summary</h1>
      <div id="product-summery">
        {summeryProducts.map(product => (
          <div key={product.id} className="summery-item">
            <img src={product.image} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <p>Quantity: {product.quantity}</p>
              <p>Total: ${product.price * product.quantity}</p>
            </div>
            <button onClick={() => onRemove(product.id)}>X</button>
          </div>
        ))}
      </div>
      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default Component2;
