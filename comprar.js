function addToCart(productName, productPrice) {
    const quantity = document.getElementById('amount').value;
    const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    
    const existingProductIndex = selectedProducts.findIndex(product => product.name === productName);
    
    if (existingProductIndex > -1) {
        selectedProducts[existingProductIndex].quantity += parseInt(quantity);
    } else {
        selectedProducts.push({ name: productName, price: productPrice, quantity: parseInt(quantity) });
    }
    
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    alert(`${productName} ha sido agregado al carrito.`);
}
function displayRandomSimilarProducts() {
    const products = [
        { name: "Cuchillas de Afeitar", image: "cuchillas.jpg", price: "$8.00", link: "cuchillas.html" },
        { name: "Crema para Peinar", image: "crema-para-peinar.jpg", price: "$5.00", link: "crema-para-peinar.html" },
        { name: "Shampoo", image: "shampoo.jpg", price: "$10.00", link: "shampoo.html" },
        { name: "Acondicionador", image: "acondicionador.jpg", price: "$6.00", link: "acondicionador.html" },
        { name: "Enjuague Bucal", image: "enjuague-bucal.jpg", price: "$4.00", link: "enjuague-bucal.html" }
    ];

    // Shuffle the products array
    const shuffledProducts = products.sort(() => 0.5 - Math.random());

    // Select the first 3 products
    const selectedProducts = shuffledProducts.slice(0, 3);

    // Get the container for similar products
    const similarProductsContainer = document.querySelector('.producto');

    // Clear existing products
    similarProductsContainer.innerHTML = '<h2>Productos Similares</h2>';

    // Append selected products to the container
    selectedProducts.forEach(product => {
        const productHTML = `
            <div class="product-container">
                <a href="${product.link}">
                    <img src="${product.image}" alt="${product.name}" class="product-image" />
                </a>
                <h3>${product.name}</h3>
                <p>Precio: ${product.price}</p>
            </div>
        `;
        similarProductsContainer.innerHTML += productHTML;
    });
}
