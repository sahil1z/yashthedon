const products = [
    "Apple",
    "Banana",
    "Carrot",
    "Date",
    "Eggplant",
    "Fig",
    "Grape",
    "Honeydew",
    "Iceberg Lettuce",
    "Jalapeño",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tomato",
    "Zucchini"
];

const searchInput = document.getElementById("search");
const autocompleteList = document.getElementById("autocomplete-list");

searchInput.addEventListener("input", function() {
    const value = this.value;
    autocompleteList.innerHTML = ""; // Clear previous results

    if (!value) {
        return; // Exit if input is empty
    }

    const filteredProducts = products.filter(product =>
        product.toLowerCase().includes(value.toLowerCase())
    );

    filteredProducts.forEach(product => {
        const item = document.createElement("div");
        item.classList.add("autocomplete-item");
        item.textContent = product;

        item.addEventListener("click", function() {
            window.location.href = `addToCart.html?item=${encodeURIComponent(product)}`; // Redirect to product.html with query parameter
        });

        autocompleteList.appendChild(item);
    });
});
