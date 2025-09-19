// Inicializar carrito desde localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Actualizar contador
function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

// Agregar producto al carrito
function addToCart(nombre, precio) {
  const item = { nombre, precio };
  cart.push(item);

  // Guardar en localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  alert(`Agregado al carrito: ${nombre} - S/ ${precio.toFixed(2)}`);
}

// Mostrar carrito en otra página (ej. carrito.html)
function renderCart() {
  const cartContainer = document.getElementById("cartItems");
  if (!cartContainer) return;

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Tu carrito está vacío 🛒</p>";
    return;
  }

  cart.forEach((item, index) => {
    cartContainer.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${item.nombre} - S/ ${item.precio.toFixed(2)}
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">X</button>
      </li>
    `;
  });
}

// Eliminar producto
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

// Cargar al abrir la página
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderCart();
});
