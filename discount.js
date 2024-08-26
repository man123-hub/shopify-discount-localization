document.addEventListener('DOMContentLoaded', function () {
    const country = '{{ customer_country }}';
    const discountMap = {
      'US': 10,
      'CA': 15,
      'UK': 20
    };
    
    const discountPercentage = discountMap[country] || 0;
    
    if (discountPercentage > 0) {
      const productPriceElement = document.querySelector('.product-price');
      const originalPrice = parseFloat(productPriceElement.dataset.originalPrice);
      const discountedPrice = originalPrice * (1 - discountPercentage / 100);
      
      productPriceElement.innerHTML = `Discounted Price: $${discountedPrice.toFixed(2)}`;
    }
  });
  