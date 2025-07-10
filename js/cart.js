// 📄 js/cart.js
const productsData = [
  { id: 1, name: "Phone", price: 499 },
  { id: 2, name: "Laptop", price: 999 },
  { id: 3, name: "Headphones", price: 199 }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItems = document.getElementById("cart-items");

if (cart.length === 0) {
  cartItems.innerHTML = '<li class="list-group-item">Your cart is empty</li>';
} else {
  cart.forEach((id, i) => {
    const product = productsData.find(p => p.id === id);
    if (product) {
      cartItems.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${product.name} - $${product.price}
          <button class="btn btn-danger btn-sm" onclick="removeFromCart(${i})">Remove</button>
        </li>`;
    }
  });
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}