window.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const welcomeSpan = document.getElementById("welcomeUser");
  const loginLink = document.querySelector('nav a[href="login.html"]');

  if (user) {
    if (welcomeSpan) {
      welcomeSpan.innerText = `Welcome, ${user.name}`;
      welcomeSpan.style.display = "inline";
    }

    if (loginLink) {
      loginLink.innerText = "Logout";
      loginLink.href = "#";
      loginLink.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        location.reload();
      });
    }
  }
});

const cartGrid = document.getElementById("cartGrid");
const cartSummary = document.getElementById("cartSummary");
const totalPriceEl = document.getElementById("totalPrice");
const emptyMessage = document.getElementById("emptyMessage");
const checkoutBtn = document.getElementById("checkoutBtn");
const paymentBox = document.getElementById("paymentBox");
const payBtn = document.getElementById("payBtn");
const totalPricePaymentEl = document.getElementById("totalPricePayment");

let cart = [];
const user = JSON.parse(localStorage.getItem("loggedInUser"));

function generateStars(rating = 0) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += '<i class="fa-solid fa-star" style="color: #FFD700;"></i>'; // full yellow star
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars += '<i class="fa-solid fa-star-half-stroke" style="color: #FFD700;"></i>'; // half star
    } else {
      stars += '<i class="fa-regular fa-star" style="color: #FFD700;"></i>'; // empty star
    }
  }
  return stars;
}

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = `show ${type}`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.className = "";
  }, 3000);
}

if (!user) {
  emptyMessage.innerText = "Please login to see your cart";
  cartGrid.style.display = "none";
  cartSummary.style.display = "none";
} else {
  cart = JSON.parse(localStorage.getItem("cart_" + user.email)) || [];
  displayCart();
}

function displayCart() {
  cartGrid.innerHTML = "";

  if (cart.length === 0) {
    emptyMessage.style.display = "block";
    cartSummary.style.display = "none";
    return;
  }

  emptyMessage.style.display = "none";
  cartSummary.style.display = "block";

  cart.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("cart-card");
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
      <div class="rating">${generateStars(item.rating || 0)}</div>
      <input type="number" value="${item.qty}" min="1" onchange="updateQty(${index}, this.value)">
      <button class="remove" onclick="removeItem(${index})">Remove</button>
    `;
    cartGrid.appendChild(card);
  });

  updateTotal();
}

function updateQty(index, value) {
  cart[index].qty = parseInt(value);
  localStorage.setItem("cart_" + user.email, JSON.stringify(cart));
  updateTotal();
  showToast(`Quantity updated for ${cart[index].name}`, "success");
}

function removeItem(index) {
  const removed = cart[index].name;
  cart.splice(index, 1);
  localStorage.setItem("cart_" + user.email, JSON.stringify(cart));
  displayCart();
  showToast(`${removed} removed from cart`, "success");
}

function updateTotal() {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.qty;
  });
  totalPriceEl.innerText = total.toFixed(2);
}

const clearBtn = document.getElementById("clearCartBtn");
if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    if (!user) {
      showToast("Please login first to see your cart", "error");
      return;
    }

    cart = JSON.parse(localStorage.getItem("cart_" + user.email)) || [];
    if (cart.length === 0) {
      showToast("Your cart is already empty 🛒", "info");
      return;
    }

    cart = [];
    localStorage.setItem("cart_" + user.email, JSON.stringify(cart));
    displayCart();
    showToast("All items removed from cart ✅", "success");
  });
}

//  CHECKOUT 
checkoutBtn.addEventListener("click", () => {
  if (!user) {
    showToast("Please login first 🛒", "error");
    return;
  }

  cart = JSON.parse(localStorage.getItem("cart_" + user.email)) || [];
  if (cart.length === 0) {
    showToast("Your cart is empty 🛒", "error");
    return;
  }

  cartSummary.style.display = "none";
  paymentBox.style.display = "block";

  let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  totalPricePaymentEl.innerText = total.toFixed(2);
});

payBtn.addEventListener("click", () => {
  const card = document.getElementById("card").value.trim();
  const date = document.getElementById("date").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  if (!card || !date || !cvv) {
    showToast("Please fill all fields 🧾", "error");
    return;
  }
  if (card.length < 12) {
    showToast("Invalid card number", "error");
    return;
  }
  if (cvv.length !== 3) {
    showToast("Invalid CVV", "error");
    return;
  }

  showToast("Payment Successful 💵", "success");
  setTimeout(() => {
    showToast("Thank you for your purchase", "success");
  }, 3000);

  cart = [];
  localStorage.setItem("cart_" + user.email, JSON.stringify(cart));
  paymentBox.style.display = "none";
  cartSummary.style.display = "block";

  document.getElementById("card").value = "";
  document.getElementById("date").value = "";
  document.getElementById("cvv").value = "";
  displayCart();
});