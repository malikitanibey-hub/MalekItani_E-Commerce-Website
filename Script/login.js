
function showRegister() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
  document.getElementById("formTitle").innerText = "Register";
}

function showLogin() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("formTitle").innerText = "Login";
}

// Toast
function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = `show ${type}`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.className = ""; 
  }, 3000);
}

// Password Eye Toggle
document.querySelectorAll('.togglePassword').forEach(icon => {
  icon.addEventListener('click', function() {
    const input = this.previousElementSibling;
    if(!input) return;
    input.type = input.type === "password" ? "text" : "password";
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
    this.classList.toggle('eye-open');
  });
});

// Registration
document.getElementById("registerForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if(users.some(u => u.email.toLowerCase() === email.toLowerCase())){
    showToast("Email already exists!", "error");
    return;
  }

  users.push({name, email, password});
  localStorage.setItem("users", JSON.stringify(users));

  showToast("Registered successfully!", "success");
  document.getElementById("registerForm").reset();
  showLogin();
});

// Login
document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

  if(!user){
    showToast("Email not found!", "error");
    return;
  }

  if(user.password !== password){
    showToast("Wrong password!", "error");
    return;
  }
  localStorage.setItem("loggedInUser", JSON.stringify(user));

  showToast(`Welcome back, ${user.name}!`, "success");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000); 
});