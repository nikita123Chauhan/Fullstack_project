// Add to Cart functionality
document.querySelector('.add-to-cart').addEventListener('click', () => {
    const productId = document.querySelector('.add-to-cart').getAttribute('data-id');
    const product = {
      id: productId,
      name: document.querySelector('.product-info h2').innerText,
      price: document.querySelector('.product-info .price').innerText,
    };
    cart.push(product);
    updateCartCount();
    alert(`${product.name} added to cart!`);
  });