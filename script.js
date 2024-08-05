document.addEventListener('DOMContentLoaded', function() {
    // Ürün verilerini çek
    const productName = document.querySelector('h1.product-single__title').innerText;
    const productPrice = document.querySelector('.product-single__price').innerText.trim();
    const productSize = document.querySelector('.single-option-selector:nth-of-type(1)').value;
    const productColor = document.querySelector('.single-option-selector:nth-of-type(2)').value;
    const productQuantity = document.getElementById('Quantity').value;
    const productImageSrc = document.querySelector('.product-single__photo img').src; // Ayakkabı görselini çek
  
    // Pop-up içeriğini güncelle
    document.getElementById('product-name').innerText = productName;
    document.getElementById('product-price').innerText = `Price: ${productPrice}`;
    document.getElementById('product-size').innerText = `Size: ${productSize}`;
    document.getElementById('product-color').innerText = `Color: ${productColor}`;
    document.getElementById('product-quantity').innerText = `Quantity: ${productQuantity}`;
    document.getElementById('product-image').src = productImageSrc; // Ayakkabı görselini güncelle
  
    // Sepete Ekle işlevi
    document.getElementById('add-to-cart').addEventListener('click', function() {
      addToCart(productName, productPrice, productSize, productColor, productQuantity);
    });
  
    // Sepete ekleme işlevi
    function addToCart(name, price, size, color, quantity) {
      const cartItems = document.getElementById('cart-items');
      const listItem = document.createElement('li');
      listItem.textContent = `${name} - ${price} - Size: ${size} - Color: ${color} - Quantity: ${quantity}`;
      cartItems.appendChild(listItem);
    }
  });
  