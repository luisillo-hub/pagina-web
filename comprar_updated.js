function addToCart(productName, productPrice) {
    let quantity = prompt("Por favor, ingrese la cantidad que desea comprar:");
    quantity = parseInt(quantity);
    
    // Validate quantity
    if (isNaN(quantity) || quantity <= 0) {
        alert("Por favor, ingrese una cantidad válida.");
        return;
    }

    const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    const existingProductIndex = selectedProducts.findIndex(product => product.name === productName);

    if (existingProductIndex > -1) {
        selectedProducts[existingProductIndex].quantity += quantity;
    } else {
        selectedProducts.push({ name: productName, price: productPrice, quantity: quantity });
    }

    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    alert(`${quantity} ${productName}(s) han sido añadidos al carrito.`);
}
function showDiscountedPrice() {
    const originalPrice = parseFloat(document.getElementById('original-price').innerText.replace('Precio con descuento: $', ''));
    const discount = originalPrice / 0.75;
    document.getElementById('discounted-price').innerText = `Precio Original: $${discount.toFixed(2)}`;
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

