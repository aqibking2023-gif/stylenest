// Products Data - Yeh file admin panel se update hogi
let products = [
  // Yahan products admin panel se add honge
];

// Admin Credentials
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'stylenest123'  // Change this password!
};

// LocalStorage se products load karein
function loadProducts() {
  const stored = localStorage.getItem('stylenest_products');
  if (stored) {
    products = JSON.parse(stored);
  }
  return products;
}

// LocalStorage mein save karein
function saveProducts() {
  localStorage.setItem('stylenest_products', JSON.stringify(products));
}

// Initial load
loadProducts();
