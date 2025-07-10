// 📄 js/products.js
const products = [
  { id: 1, name: "Phone", price: 499 },
  { id: 2, name: "Laptop", price: 999 },
  { id: 3, name: "Headphones", price: 199 }
];

const list = document.getElementById("product-list");
products.forEach(product => {
  const card = `
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">Price: $${product.price}</p>
          <button class="btn btn-sm btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    </div>`;
  list.innerHTML += card;
});

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
}
