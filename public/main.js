import "./style.css";
import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";

showProductContainer(products);
console.log(products); 

document.addEventListener('DOMContentLoaded', () => {
    const decrementButtons = document.querySelectorAll('.cart-decrement');
    const incrementButtons = document.querySelectorAll('.cart-increment');

    // Decrement quantity
    decrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
            }
        });
    });

    // Increment quantity
    incrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
        });
    });

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.product-actual-price').textContent;
            const quantity = productCard.querySelector('.quantity').textContent;

            const productData = {
                name: productName,
                price: productPrice,
                quantity: parseInt(quantity) // Get the current quantity
            };

            // Get current cart from local storage
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(productData);

            // Save back to local storage
            localStorage.setItem('cart', JSON.stringify(cart));
        });
    });
});
