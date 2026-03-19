  const menuBtn = document.getElementById("menu-btn");
  const nav = document.getElementById("nav");

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
      nav.classList.remove("show");
    }
  });

//slideShow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

setInterval(function () {
  plusSlides(1);
}, 5000);

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

    // Change "Login" link to "Logout"
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

function goToProduct(productName) {
  localStorage.setItem("selectedProduct", productName);
  window.location.href = "products.html";
}
