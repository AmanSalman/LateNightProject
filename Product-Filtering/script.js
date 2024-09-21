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


const productList = document.getElementById("product-list");

function displayProducts(category) {
  productList.innerHTML = ""; // Clear the current product list
  const filteredProducts = category === "All" ? products : products.filter(product => product.category === category);
  
  filteredProducts.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <div class="product-name">${product.name}</div>
      <div class="product-category">${product.category}</div>
      <div class="product-price">$${product.price}</div>
    `;
    productList.appendChild(productCard);
  });
}

const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    displayProducts(category);
  });
});

displayProducts("All");
