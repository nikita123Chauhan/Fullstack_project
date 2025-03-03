// Display Cart Items
function displayCartItems() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;
  
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <img src="../assets/images/product${item.id}.jpg" alt="${item.name}">
        <div class="details">
          <h3>${item.name}</h3>
          <p>${item.price}</p>
        </div>
        <span class="remove" onclick="removeCartItem(${index})">&#10005;</span>
      `;
      cartItems.appendChild(cartItem);
      total += parseFloat(item.price.replace('$', ''));
    });
  
    cartTotal.innerText = total.toFixed(2);
  }
  
  // Remove Cart Item
  function removeCartItem(index) {
    cart.splice(index, 1);
    updateCartCount();
    displayCartItems();
  }
  
  // Initialize Cart Page
  displayCartItems();