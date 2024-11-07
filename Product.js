import React from 'react';

function Products() {
  // Example product data; in a real app, this would likely come from an API
  const products = [
    { id: 1, name: 'Dress', price: '$49.99' },
    { id: 2, name: 'Shirt', price: '$29.99' },
    { id: 3, name: 'Shoes', price: '$59.99' }
  ];

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
