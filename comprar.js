
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
function showDiscountedPrice() {
    const originalPrice = parseFloat(document.getElementById('original-price').innerText.replace('Precio con descuento: $', ''));
    const discount = originalPrice / 0.75;
    document.getElementById('discounted-price').innerText = `Precio Original: $${discount.toFixed(2)}`;
}

function displayRandomSimilarProducts() {
    const products = [
        { name: 'Gel Antibacterial', image: 'gel-antibacterial.jpg', link: 'gel-antibacterial.html', price: '$12.00' },
        { name: 'Cerveza', image: 'cerveza.jpg', link: 'cerveza.html', price: '$3.00' },
        { name: 'Vino Tinto', image: 'vino-tinto.jpg', link: 'vino-tinto.html', price: '$10.00' },
        { name: 'Agua Mineral', image: 'agua-mineral.jpg', link: 'agua-mineral.html', price: '$1.50' },
        { name: 'Refresco', image: 'refresco.webp', link: 'refresco.html', price: '$2.50' },
        { name: 'Pañales', image: 'panales.jpg', link: 'panales.html', price: '$20.00' },
        { name: 'Leche en Polvo', image: 'leche-en-polvo.jpg', link: 'leche-en-polvo.html', price: '$15.00' },
        { name: 'Chupete', image: 'chupete.jpg', link: 'chupete.html', price: '$5.00' },
        { name: 'Biberón', image: 'biberon.jpg', link: 'biberon.html', price: '$8.00' },
        { name: 'Jabón Exfoliante', image: 'jabon-exfoliante.webp', link: 'jabon-exfoliante.html', price: '$15.00' },
        { name: 'Labial Hidratante', image: 'labial-hidratante.jpg', link: 'labial-hidratante.html', price: '$12.00' },
        { name: 'Mascarilla Hidratante', image: 'mascarilla-hidratante.webp', link: 'mascarilla-hidratante.html', price: '$25.00' },
        { name: 'Paracetamol', image: 'paracetamol.png', link: 'paracetamol.html', price: '$2.00' },
        { name: 'Shampoo', image: 'shampoo.jpg', link: 'shampoo.html', price: '$15.00' },
        { name: 'Vaselina', image: 'vaselina.jpg', link: 'vaselina.html', price: '$5.00' },
        { name: 'Acondicionador', image: 'acondicionador.jpg', link: 'acondicionador.html', price: '$6.00' },
        { name: 'Ibuprofeno', image: 'ibuprofeno.jpg', link: 'ibuprofeno.html', price: '$12.00' },
        { name: 'Antibiótico', image: 'antibiotico.webp', link: 'antibiotico.html', price: '$20.00' },
        { name: 'Base de Maquillaje', image: 'base-maquillaje.jpg', link: 'base-maquillaje.html', price: '$35.00' },
        { name: 'Desodorante', image: 'desodorante.jpg', link: 'desodorante.html', price: '$10.00' },
        { name: 'Exfoliante Facial', image: 'exfoliante-facial.webp', link: 'exfoliante-facial.html', price: '$22.00' },
        { name: 'Crema Hidratante', image: 'crema-hidratante.jpg', link: 'crema-hidratante.html', price: '$20.00' },
        { name: 'Crema Solar', image: 'crema-solar.jpg', link: 'crema-solar.html', price: '$15.00' },
        { name: 'Crema para Peinar', image: 'crema-para-peinar.jpg', link: 'crema-para-peinar.html', price: '$5.00' },
        { name: 'Cuchillas', image: 'cuchillas.jpg', link: 'cuchillas.html', price: '$8.00' },
        { name: 'Enjuague Bucal', image: 'enjuague-bucal.jpg', link: 'enjuague-bucal.html', price: '$4.00' },
        { name: 'Relajante Muscular', image: 'relajante-muscular.png', link: 'relajante-muscular.html', price: '$14.00' },
        { name: 'Serum Facial', image: 'serum-facial.png', link: 'serum-facial.html', price: '$30.00' },
        { name: 'Crema Anti-edad', image: 'crema-antiedad.avif', link: 'crema-antiedad.html', price: '$30.00' },
        { name: 'Toallitas Húmedas', image: 'toallitas-humedas.jpg', link: 'toallitas-humedas.html', price: '$3.00' },
        { name: 'Cepillo de Dientes', image: 'cepillo-dientes.jpg', link: 'cepillo-dientes.html', price: '$3.00' },
        { name: 'Limonada', image: 'limonada.jpg', link: 'limonada.html', price: '$5.00' },
        { name: 'Margarita', image: 'margarita.jpg', link: 'margarita.html', price: '$7.00' },
        { name: 'Daiquiri', image: 'daiquiri.jpg', link: 'daiquiri.html', price: '$6.00' },
        { name: 'Té Helado', image: 'te-helado.jpg', link: 'te-helado.html', price: '$3.50' },
        { name: 'Agua de Jamaica', image: 'agua-de-jamaica.jpg', link: 'agua-de-jamaica.html', price: '$3.00' },
        { name: 'Batido de Fresa', image: 'batido-de-fresa.jpg', link: 'batido-de-fresa.html', price: '$5.50' },
        { name: 'Piña Colada', image: 'pina-colada.jpg', link: 'pina-colada.html', price: '$8.00' },
        { name: 'Antieméticos', image: 'antiemeticos.jpg', link: 'antiemeticos.html', price: '$8.00' },
        { name: 'Loperamida', image: 'loperamida.jpg', link: 'loperamida.html', price: '$4.00' },
        { name: 'Monster', image: 'monster.jpg', link: 'monster.html', price: '$12.00' },
        { name: 'Antitusigenos', image: 'antitusigenos.jpg', link: 'antitusigenos.html', price: '$12.00' },
        { name: 'Descongestionante', image: 'descongestionante.jpg', link: 'descongestionante.html', price: '$8.00' },
        { name: 'Mojito', image: 'mojito.jpg', link: 'mojito.html', price: '$6.50' }  ];

    // Shuffle the products array
    const shuffledProducts = products.sort(() => 0.5 - Math.random());

    // Select the first 4 products
    const selectedProducts = shuffledProducts.slice(0, 4);

    // Get the container for similar products
    const similarProductsContainer = document.querySelector('.producto');

    // Append selected products to the container
    selectedProducts.forEach(product => {
        const originalPrice = parseFloat(product.price.replace('$', ''));
        const discount = originalPrice / 0.75;
        const productHTML = `
    <div class="product-container">
        <a href="${product.link}">
            <img src="${product.image}" alt="${product.name}" class="product-image" />
        </a>
        <h3>${product.name}</h3>
        <p id="discounted-price">Precio Original: $${discount.toFixed(2)}</p>
        <p id="original-price">Precio con descuento: ${product.price}</p>
    </div>
`;
        similarProductsContainer.innerHTML += productHTML;
    });
}
function mostrarMenu() {
    const menuHTML = `
        <nav>
         <ul>
         <img src="logo.png" alt="promocion" height="40px" />
            <a href="index.html">Inicio</a>
            <a href="buscador.html">Buscar</a>
            <a href="drogueria.html">Droguería</a>
            <a href="belleza.html">Belleza</a>
            <a href="bebes.html">Bebé y Mamá</a>
            <a href="cuidado-personal.html">Cuidado Personal</a>
            <a href="bebidas.html">Bebidas</a>
            <a href="contactanos.html">Contáctanos</a>
            <a href="carrito.html">Carrito</a>
            <a href="registrarse.html">Registrarse</a>
            </ul>
        </nav>
    `;
    document.getElementById('menuContainer').innerHTML = menuHTML;
}
function mostrarFooter() {
    const footerHTML = `
       <footer>
    <div class="container">
        <h4>Contacto</h4>
        <p>
            <strong>Droguería La Mano de Dios</strong><br>
            Calle 123 #45-67<br>
            Santa Marta, Colombia<br>
            Teléfono: (123) 456-7890<br>
            Email: contacto@droguerialamanodedios.com
        </p>
        
        <h4>Síguenos en nuestras redes sociales</h4>
        <a href="https://www.facebook.com/droguerialamanodedios" target="_blank">
            <img src="facebook-icon.jpg" alt="Facebook" style="width: 50px; margin: 0 10px;">
        </a>
        <a href="https://www.instagram.com/droguerialamanodedios" target="_blank">
            <img src="instagram-icon.png" alt="Instagram" style="width: 50px; margin: 0 10px;">
        </a>
        <a href="https://www.twitter.com/droguerialamanodedios" target="_blank">
            <img src="twitter-logo.png" alt="Twitter" style="width: 80px;">
        </a>
        
        <p style="margin-top: 20px;">
            &copy; 2024 Droguería La Mano de Dios. Todos los derechos reservados.
        </p>
    </div>
</footer>
        
    `;
    document.getElementById('footerContainer').innerHTML = footerHTML;
}