import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import FilterButtons from './FilterButtons';

const products = [
  { name: "Laptop", category: "Electronics", price: 999 },
  { name: "Dress", category: "Clothing", price: 49 },
  { name: "Smartphone", category: "Electronics", price: 699 },
  { name: "T-Shirt", category: "Clothing", price: 19 },
  { name: "Lamp", category: "Home", price: 25 },
  { name: "Headphones", category: "Electronics", price: 199 },
  { name: "Jacket", category: "Clothing", price: 89 },
  { name: "Coffee Maker", category: "Home", price: 49 }
];

function App() {
  const [category, setCategory] = useState("All");

  const handleFilterChange = (category) => {
    setCategory(category);
  };

  const filteredProducts = category === "All"
    ? products
    : products.filter(product => product.category === category);

  return (
    <>
      <div className="container">
      <aside className="sidebar">
        <h2>Categories</h2>
        <FilterButtons activeCategory={category} onFilterChange={handleFilterChange} />
      </aside>
      <main>
        <h1>Product List</h1>
        <div id="product-list">
          <ProductList products={filteredProducts} />
        </div>

      </main>        
    </div>
    <footer>
    Made with 💖 by <a href="https://www.linkedin.com/in/AmanSalman/" target="_blank" rel="noopener noreferrer">Aman Salman</a>
  </footer>
    </>
  
  );
}

export default App;
