// Show welcome username if user is logged in
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

function generateStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '<i class="fa-solid fa-star"></i>';
    } else if (i - 0.5 <= rating) {
      stars += '<i class="fa-solid fa-star-half-stroke"></i>';
    } else {
      stars += '<i class="fa-regular fa-star"></i>';
    }
  }
  return stars;
}

const user = JSON.parse(localStorage.getItem("loggedInUser"));
const wishlistGrid = document.getElementById("wishlistGrid");
const emptyMessage = document.getElementById("emptyMessage");
let wishlist = [];

if (!user) {
  emptyMessage.innerText = "Please login to see your wishlist";
  wishlistGrid.style.display = "none";
} else {
  wishlist = JSON.parse(localStorage.getItem("wishlist_" + user.email)) || [];
  displayWishlist();
}

function displayWishlist() {
  wishlistGrid.innerHTML = "";

  if (wishlist.length === 0) {
    emptyMessage.style.display = "block";
    const clearBtn = document.getElementById("clearWishlistBtn");
    if (clearBtn) clearBtn.style.display = "none";
    return;
  }

  emptyMessage.style.display = "none";
  const clearBtn = document.getElementById("clearWishlistBtn");
  if (clearBtn) clearBtn.style.display = "inline-block";

  wishlist.forEach((item, index) => {
    let card = document.createElement("div");
    card.classList.add("wishlist-card");

    card.innerHTML = `
      <img src="${item.image}">
      <h3>${item.name}</h3>
      <p class="price">$${item.price}</p>
      <div class="rating">${generateStars(item.rating)}</div>
      <button onclick="addToCart('${item.name}',${item.price},'${item.image}','${item.rating}')">Add to Cart</button>
      <button onclick="removeItem(${index})">Remove</button>
    `;

    wishlistGrid.appendChild(card);
  });
}

function removeItem(index) {
  const removedItem = wishlist[index];
  wishlist.splice(index, 1);
  localStorage.setItem("wishlist_" + user.email, JSON.stringify(wishlist));
  displayWishlist();
  showToast(`${removedItem.name} removed from wishlist ✅`, "success");
}

function addToCart(name, price, image, rating) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price, image, rating, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  showToast(`${name} added to cart ✅`, "success");
}

const clearBtn = document.getElementById("clearWishlistBtn");
if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    if (!user) {
      showToast("Please login first", "error");
      return;
    }

    if (wishlist.length === 0) {
      showToast("Your wishlist is already empty", "info");
      return;
    }

    wishlist = [];
    localStorage.setItem("wishlist_" + user.email, JSON.stringify(wishlist));
    displayWishlist();
    showToast("All items removed from wishlist ✅", "success");
  });
}

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = `toast show ${type}`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.className = "toast";
  }, 3000);
}