import { useState } from 'react';
import './App.css';
import Component2 from './component2';
import Component1 from './component1';

function App() {
  const [product, setProduct] = useState([
    {id: 1, name: 'carrot', description: 'fresh Carrot', price: 2, image: 'images/carrot.jpg', quantity: 0},
    {id: 2, name: 'cauliflower', description: 'fresh Cauliflower', price: 5, image: 'images/cauliflower.jpg', quantity: 0},
    {id: 3, name: 'cucumber', description: 'fresh Cucumber', price: 6, image: 'images/cucumber.jpg', quantity: 0},
    {id: 4, name: 'potato', description: 'fresh potato', price: 7, image: 'images/potato.jpg', quantity: 0},
    {id: 5, name: 'tomato', description: 'fresh tomato', price: 3, image: 'images/tomato.jpg', quantity: 0}
  ]);

  const [viewSummery, setViewSummery] = useState(false);

  const updateQuantity = (id, change) => {
    setProduct(product.map(p =>
      p.id === id ? { ...p, quantity: Math.max(0, p.quantity + change) } : p
    ));
  };

  const removeProduct = (id) => {
    console.log('removing product with id:', id);
    setProduct(product.map(p =>
      p.id === id ? { ...p, quantity: 0 } : p
    ));
  };

  const TotalPrice = product.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div className="App">
      {viewSummery ? (
        <Component2
          products={product}
          onBack={() => setViewSummery(false)}
          onRemove={removeProduct}
        />
      ) : (
        <Component1
          products={product}
          onViewSummery={() => setViewSummery(true)}
          onUpdateQuantity={updateQuantity}
          TotalPrice={TotalPrice}
        />
      )}
    </div>
  );
}

export default App;
