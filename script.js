// [Keep all previous JavaScript]
        
        // Add this new functionality for the menu section
        document.addEventListener('DOMContentLoaded', function() {
            // Toggle drink items when category header is clicked
            const categoryHeaders = document.querySelectorAll('.category-header');
            
            categoryHeaders.forEach(header => {
                header.addEventListener('click', function() {
                    const category = this.parentElement;
                    const items = category.querySelector('.drink-items');
                    const icon = this.querySelector('i');
                    
                    // Toggle the current category
                    this.classList.toggle('active');
                    items.classList.toggle('show');
                    
                    // Close other open categories
                    categoryHeaders.forEach(otherHeader => {
                        if (otherHeader !== header) {
                            otherHeader.classList.remove('active');
                            otherHeader.parentElement.querySelector('.drink-items').classList.remove('show');
                        }
                    });
                });
            });
            
            // Open the first category by default
            if (categoryHeaders.length > 0) {
                categoryHeaders[0].click();
            }
            
            
            // Smooth scrolling for menu links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        if (window.innerWidth <= 992) {
                            navContainer.classList.remove('active');
                            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                        }
                    }
                });
            });
        });

    
  document.addEventListener('DOMContentLoaded', function () {
    // Existing menu toggle code...

    // Add to Cart Functionality
    const cartButtons = document.querySelectorAll('.add-to-cart');

    cartButtons.forEach(button => {
      button.addEventListener('click', function () {
        const item = this.closest('.drink-item');
        const name = item.querySelector('.drink-name').innerText;
        const price = item.querySelector('.drink-price').innerText;

        const cartItem = {
          name: name,
          price: price
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${name} has been added to your cart!`);
      });
    });
  });

  function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const countElement = document.querySelector('.cart-count');
  if (countElement) {
    countElement.textContent = cart.length;
  }
}

updateCartCount(); // Initial call

// Modify the "Add to Cart" part to update count
cartButtons.forEach(button => {
  button.addEventListener('click', function () {
    const item = this.closest('.drink-item');
    const name = item.querySelector('.drink-name').innerText;
    const price = item.querySelector('.drink-price').innerText;

    const cartItem = { name, price };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} has been added to your cart!`);
    updateCartCount(); // <--- Add this
  });
});



        