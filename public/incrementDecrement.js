document.addEventListener('DOMContentLoaded', () => {
  // Get all increment and decrement buttons
  const incrementButtons = document.querySelectorAll('.cart-increment');
  const decrementButtons = document.querySelectorAll('.cart-decrement');

  // Loop through increment buttons and add click event listeners
  incrementButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the quantity container
      const quantityContainer = button.previousElementSibling;
      let quantity = parseInt(quantityContainer.textContent);

      // Increase quantity
      quantity += 1;
      quantityContainer.textContent = quantity;
    });
  });

  // Loop through decrement buttons and add click event listeners
  decrementButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the quantity container
      const quantityContainer = button.nextElementSibling;
      let quantity = parseInt(quantityContainer.textContent);

      // Decrease quantity if it's more than 1
      if (quantity > 1) {
        quantity -= 1;
        quantityContainer.textContent = quantity;
      }
    });
  });
});
