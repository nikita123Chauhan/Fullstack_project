document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCartDisplay() {
        let cartItemsContainer = document.getElementById("cart-items");
        let totalAmountElement = document.getElementById("total-amount");
        let payButton = document.getElementById("pay-button");

        // Clear current cart items
        cartItemsContainer.innerHTML = "";
        let totalAmount = 0;

        // Display each item in the cart
        cart.forEach(item => {
            let li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            cartItemsContainer.appendChild(li);
            totalAmount += item.price * item.quantity;  // Calculate total
        });

        totalAmountElement.textContent = totalAmount.toFixed(2); // Update total

        // Show pay button only if cart is not empty
        payButton.style.display = cart.length > 0 ? "block" : "none";
    }

    function updateCartCount() {
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById("cart-count").textContent = totalItems;
    }

    function addToCart(productId, productName, productPrice, productImage) {
        productId = productId.toString();
        let existingProduct = cart.find(item => item.id === productId);

        if (existingProduct) {
            existingProduct.quantity += 1; // Increment quantity if item exists
        } else {
            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1
            });
        }

        // Store updated cart in localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();  // Update cart item count
        updateCartDisplay(); // Update the cart display
        alert(`${productName} added to cart!`);
    }

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let productId = this.getAttribute("data-id");
            let productName = this.previousElementSibling.previousElementSibling.textContent;
            let productPrice = parseFloat(this.previousElementSibling.textContent.replace("$", "").trim());
            let productImage = this.parentElement.querySelector("img").src;

            addToCart(productId, productName, productPrice, productImage);
        });
    });

    // Handle the "Pay" button click event
    document.getElementById("pay-button").addEventListener("click", function () {
        alert("Your order is confirmed! 🎉");
        localStorage.removeItem("cart"); // Clear cart from localStorage
        cart = [];  // Reset cart
        updateCartCount(); // Update cart count
        updateCartDisplay(); // Update cart display
    });

    // Initial load: Update cart and count
    updateCartCount();
    updateCartDisplay();
});