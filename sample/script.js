// JavaScript code for adding products to the cart

// Selecting elements
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartItemsList = document.getElementById('cart-items');

// Adding event listeners to Add to Cart buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCartClicked);
});

// Function to handle Add to Cart button click
function addToCartClicked(event) {
    const button = event.target;
    const product = button.parentElement;
    const productName = product.querySelector('h2').innerText;
    const productPrice = product.querySelector('p').innerText;

    // Creating cart item element
    const cartItem = document.createElement('li');
    cartItem.innerText = `${productName} - ${productPrice}`;

    // Adding cart item to the cart list
    cartItemsList.appendChild(cartItem);
}
