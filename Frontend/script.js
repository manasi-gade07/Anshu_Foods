document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll(".filter");
    filters.forEach(filter => {
        filter.addEventListener("change", function () {
            let selectedFilters = Array.from(filters)
                .filter(f => f.checked)
                .map(f => f.value);

            document.querySelectorAll(".box-content").forEach(card => {
                if (selectedFilters.length === 0 || selectedFilters.includes(card.dataset.category)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});


 // Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('searchIcon');
    const selectElement = document.getElementById('searchSelect');
  
    searchIcon.addEventListener('click', function () {
      const selectedPage = selectElement.value;
  
      if (selectedPage !== 'all') {
        window.location.href = selectedPage;
      } else {
        alert('Please select a category to search.');
      }
    });
  });
  
  let previousPage = window.location.href; // Store current page URL

const openIcon = document.getElementById('openPanel');
const scrollPanel = document.getElementById('scrollPanel');

const options = [
  { text: 'Home', value: 'index.html' },

  { text: 'Namkeen', value: 'namkeen.html' },
  { text: 'Snacks', value: 'snacks.html' },
  { text: 'Sweets', value: 'sweets.html' },
  { text: 'Diary & Bakery', value: 'bakery.html' },
  { text: 'Aftermeal', value: 'aftermeal.html' },
  { text: 'Masale', value: 'Masale.html' },
  { text: 'Drinks', value: 'drinks.html' },
  { text: 'Festivals', value: 'festive.html' },
  { text: 'Regional', value: 'regional.html' },
  { text: 'Gifting', value: 'gifting.html' }
];

openIcon.addEventListener('click', function () {
  scrollPanel.innerHTML = '';

  const closeButton = document.createElement('button');
  closeButton.id = 'closePanel';
  closeButton.classList.add('close-btn');
  closeButton.innerHTML = '<i class="fa-solid fa-times"></i>';
  scrollPanel.appendChild(closeButton);

  // Add options
  options.forEach(function (option) {
    const link = document.createElement('a');
    link.textContent = option.text;
    link.href = option.value;
    scrollPanel.appendChild(link);
  });

  scrollPanel.style.display = 'block';
  document.body.style.overflow = 'hidden';

  // Add close button functionality AFTER it's added to DOM
  closeButton.addEventListener('click', function () {
    scrollPanel.style.display = 'none';
    document.body.style.overflow = 'auto';
    window.location.href = previousPage;
  });
});

// Optional: Click outside to close
document.addEventListener('click', function (e) {
  if (!scrollPanel.contains(e.target) && e.target !== openIcon) {
    scrollPanel.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add item to cart
function addToCart(productName, price, imageUrl) {
  const item = { name: productName, price: price, image: imageUrl };
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  showPopupMessage(); // Show pop-up when item is added
}

// Function to update cart count
function updateCartCount() {
  document.getElementById('cartCount').innerText = cart.length;
}

// Function to show popup message
function showPopupMessage() {
  const popup = document.getElementById('popupMessage');
  const popupText = document.getElementById('popupText');
  popupText.textContent = "Item added to cart!";
  popup.style.display = "block";

  // Close the popup after 2 seconds
  setTimeout(() => {
    popup.style.display = "none";
  }, 1000);
}

// Function to close popup when clicking on close button
document.getElementById('closePopup').addEventListener('click', () => {
  const popup = document.getElementById('popupMessage');
  popup.style.display = "none";
});

// Render the cart
function renderCart() {
  const container = document.getElementById('cartContainer');
  container.innerHTML = ''; // Clear the existing cart display

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach((item, index) => {
      const box = document.createElement('div');
      box.className = 'cart-item';
      box.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width:100px;">
        <h3>${item.name}</h3>
        <p>Price: Rs. ${item.price}</p>
        <button class="btn" onclick="removeFromCart(${index})">Remove</button>
      `;
      container.appendChild(box);
    });
  }
}

// Function to remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1); // Remove item from the cart
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderCart(); // Render cart on page load
});


