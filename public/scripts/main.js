// Cart functionality
let cart = [];

// Add to Cart
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.getAttribute('data-id');
    const product = {
      id: productId,
      name: button.parentElement.querySelector('h3').innerText,
      price: button.parentElement.querySelector('p').innerText,
    };
    cart.push(product);
    updateCartCount();
    alert(`${product.name} added to cart!`);
  });
});

// Update Cart Count
function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  cartCount.innerText = cart.length;
}