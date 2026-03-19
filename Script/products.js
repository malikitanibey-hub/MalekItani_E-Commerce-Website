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

const products = [
  {
    name: "Wide Modern Velvet Upholstered 3-Legs Accent Chair",
    price: 220,
    oldPrice: 250, // added
    discount: 12, // added
    category: "chairs",
    image:
      "Images/33_+Wide+Modern+Velvet+Upholstered+3-Legs+Accent+Chair-2043848718.webp",
    rating: 4.5,
  },

  {
    name: "Linzy Pine Solid Wood Dining Table",
    price: 419,
    category: "tables",
    image: "Images/Linzy+Pine+Solid+Wood+Dining+Table-415220511-415220501.webp",
    rating: 5,
  },

  {
    name: "Luxury Sofa",
    price: 215,
    oldPrice: 250,
    discount: 15,
    category: "sofa",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    rating: 3,
  },

  {
    name: "Brooklington Upholstered Sofa",
    price: 400,
    oldPrice: 450, // added
    discount: 11, // added
    category: "sofa",
    image: "Images/Brooklington+Upholstered+Sofa-880809770.webp",
    rating: 3.5,
  },

  {
    name: "Bed Frame",
    price: 490,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    rating: 4.5,
  },

  {
    name: " Louann Table Lamp Set With Night Light And USB Ports (Set of 2)",
    price: 121.99,
    oldPrice: 140, // added
    discount: 13, // added
    category: "lighting",
    image:
      "Images/26_+Louann+Table+Lamp+Set+With+Night+Light+And+USB+Ports.webp",
    rating: 4,
  },

  {
    name: "Louann Table Lamp Set With Night Light And USB Ports",
    price: 115,
    category: "lighting",
    image:
      "Images/25_+Louann+Table+Lamp+Set+With+Night+Light+And+USB+Ports.webp",
    rating: 4,
  },

  {
    name: "Touch Dimmable USB & Type-C & AC Outlet Industrial Metal Desk Lamp with Bulb (Set of 2)",
    price: 54,
    oldPrice: 60, // added
    discount: 10, // added
    category: "lighting",
    image:
      "Images/Touch+Dimmable+USB+&+Type-C+&+AC+Outlet+Industrial+Metal+Desk+Lamp+with+Bulb-1960276230.webp",
    rating: 3,
  },

  {
    name: "Hamilton Beach® 7-Speed 4-Quart Electric Stand Mixer with Splash Guard, Dough Hook, Flat Beater, and Whisk Attachments 63388)",
    price: 82,
    category: "kitchen",
    image:
      "Images/Hamilton+Beach®+7-Speed+4-Quart+Electric+Stand+Mixer+with+Splash+Guard,+Dough+Hook,+Flat+Beater,+and+Whisk+Attachments-76768026.webp",
    rating: 4.5,
  },

  {
    name: "Homewell Air Fryer 12-in-1 with 6-Quart Capacity, Viewing Window, Air Fry, Roast, Reheat, Dehydrate, Bake, Steam, And More, 400°F Max Temperature",
    price: 52,
    oldPrice: 65, // added
    discount: 20, // added
    category: "kitchen",
    image:
      "Images/Homewell+Air+Fryer+12-in-1+with+6-Quart+Capacity,+Viewing+Window,+Air+Fry,+Roast,+Reheat,+Dehydrate,+Bake,+Steam,+And+More,+400°F+Max+Temperature-105508635.webp",
    rating: 4.5,
  },

  {
    name: "Wooden Cabinet",
    price: 300,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
    rating: 4,
  },

  {
    name: "Wardrobe",
    price: 450,
    oldPrice: 500, // added
    discount: 10, // added
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
    rating: 4,
  },

  {
    name: "Tatyanna 25.5 Modern USB Table Lamp Set with Night Light, Built-in Outlet (Set of 2)",
    price: 210,
    oldPrice: 240, // added
    discount: 12, // added
    category: "lighting",
    image:
      "Images/Tatyanna+25.5_+Modern+USB+Table+Lamp+Set+with+Night+Light,+Built-in+Outlet-625921702.webp",
    rating: 4.5,
  },

  {
    name: "Brinna Contemporary 84 Upholstered Button-tufted Sofa with Metal Legs",
    price: 700,
    category: "sofa",
    image:
      "Images/Brinna+Contemporary+84_+Upholstered+Button-tufted+Sofa+with+Metal+Legs-1226015262.webp",
    rating: 4.5,
  },

  {
    name: "Vesna L-shape 81 Wide Space-Saving Sleeper Sofa Upholstered Pull-out Sofa Bed",
    price: 509,
    oldPrice: 550, // added
    discount: 15, // added
    category: "sofa",
    image:
      "Images/Vesna+L-shape+81_+Wide+Space-Saving+Sleeper+Sofa+Upholstered+Pull-out+Sofa+Bed-95208153.webp",
    rating: 4,
  },

  {
    name: "MINIMORE Modern Style 88.2 W Charlotte 3Seater Chesterfield Sofa",
    price: 780,
    category: "sofa",
    image:
      "Images/MINIMORE+Modern+Style+88.2''+W+Charlotte+3Seater+Chesterfield+Sofa-1398185772.webp",
    rating: 5,
  },

  {
    name: "Modern Upholstered Faux Leather Dining Chairs (Set of 2)",
    price: 199,
    oldPrice: 220, // added
    discount: 10, // added
    category: "chairs",
    image:
      "Images/Modern+Upholstered+Faux+Leather+Dining+Chairs-458129794.webp",
    rating: 4.5,
  },

  {
    name: "Pamplona 26 W Modern Stylish Soft and Breathable Upholstered Barrel Chair and Ottoman",
    price: 114,
    oldPrice: 96, // added
    discount: 10, // added
    category: "chairs",
    image:
      "Images/Pamplona+26_+W+Modern+Stylish+Soft+and+Breathable+Upholstered+Barrel+Chair+and+Ottoman-1349253307.webp",
    rating: 4.5,
  },

  {
    name: "Eilzabeth 33 W Modern Soft Wide Upholstered Striped Swivel Arm Accent Chair",
    price: 540,
    oldPrice: 600, // added
    discount: 10, // added
    category: "chairs",
    image:
      "Images/Eilzabeth+33_+W+Modern+Soft+Wide+Upholstered+Striped+Swivel+Arm+Accent+Chair-1399693623.webp",
    rating: 4.5,
  },

  {
    name: "Simsbury Velvet Modern Upholstered Quilt Stitched Tapered Metal Leg Luxury Dining Chairs (Set of 2)",
    price: 230,
    category: "chairs",
    image:
      "Images/Simsbury+Velvet+Modern+Upholstered+Quilt+Stitched+Tapered+Metal+Leg+Luxury+Dining+Chairs-903038780-855698035.webp",
    rating: 3.5,
  },

  {
    name: "Friedhardt 6 - Light Dimmable Gold Drum Chandelier with Textured Glass, Modern Lighting for Kitchen Island or Dining Room",
    price: 240,
    oldPrice: 280, // added
    discount: 14, // added
    category: "lighting",
    image:
      "Images/Friedhardt+6+-+Light+Dimmable+Gold+Drum+Chandelier+with+Textured+Glass,+Modern+Lighting+for+Kitchen+Island+or+Dining+Room-1858522856-1819329651.webp",
    rating: 5,
  },

  {
    name: "Delainy 20 5 - Lights Chrome Modern Dimmable Tiered Unique/Statement Drum Crystal Flush Mount Lighting Fixture For Living Room/ Bedroom",
    price: 180,
    oldPrice: 210,
    discount: 14,
    category: "lighting",
    image:
      "Images/Delainy++20_+5+-+Lights++Chrome+Modern+Dimmable+Tiered++Unique_Statement+Drum+Crystal+Flush+Mount+Lighting+Fixture+For+Living+Room_+Bedroom-535354130.webp",
    rating: 4,
  },
  {
    name: "Hannah-Jayne 14.17'' Sputnik Modern Linear Flush Mount",
    price: 35,
    oldPrice: 40,
    discount: 12,
    category: "lighting",
    image:
      "Images/Hannah-Jayne+14.17''+Sputnik+Modern+Linear+Flush+Mount-690122688-704887678.webp",
    rating: 4,
  },
  {
    name: "Marais Dimmable Round K9 Crystal Ceiling Light Modern Chandeliers",
    price: 490,
    oldPrice: 550,
    discount: 11,
    category: "lighting",
    image:
      "Images/Marais+Dimmable+Round+K9+Crystal+Ceiling+Light+Modern+Chandeliers-395783180-395783182.webp",
    rating: 5,
  },
  {
    name: "Wynsum 62.5 to 94.5 Extendable Rectangular Leg Dining Tables for 6-10 People",
    price: 480,
    oldPrice: 550,
    discount: 13,
    category: "tables",
    image:
      "Images/Wynsum+62.5_+to+94.5_++Extendable+Rectangular++Leg+Dining+Tables+for+6-10+People.webp",
    rating: 4.5,
  },
  {
    name: "Homeira 62.9 to 94.4 Extendable Dining Tables for 6 to 10 - Rectangle Sintered stone Dining Table",
    price: 850,
    oldPrice: 950,
    discount: 11,
    category: "tables",
    image:
      "Images/Homeira++62.9_+to+94.4_+Extendable+Dining+Tables+for+6+to+10+-+++Rectangle++Sintered+stone+Dining+Table-1425236615.webp",
    rating: 5,
  },
  {
    name: "Enid Nesting Coffee Table",
    price: 126,
    oldPrice: 150,
    discount: 16,
    category: "tables",
    image: "Images/Enid+Nesting+Coffee+Table-1249452050-1249452048.webp",
    rating: 4,
  },
  {
    name: "Rahn 63 W. 6 Person Dining Table",
    price: 165,
    oldPrice: 190,
    discount: 13,
    category: "tables",
    image: "Images/Rahn+63''+W.+6+Person+Dining+Table-1170063239.webp",
    rating: 4,
  },
  {
    name: "Level Stainless Steel Top End Table",
    price: 120,
    oldPrice: 140,
    discount: 14,
    category: "tables",
    image: "Images/Level+Stainless+Steel+Top+End+Table-2101675911.webp",
    rating: 3.5,
  },
  {
    name: "Ameire Upholstered Wingback Bed",
    price: 175,
    oldPrice: 200,
    discount: 13,
    category: "bedroom",
    image: "Images/Ameire+Upholstered+Wingback+Bed-1428701481-1428701396.webp",
    rating: 4,
  },
  {
    name: "Antioch Queen Bed Frame with 2 Underbed Drawers, Modern Platform Bed with Charging Station & LED Light, Storage Headboard with 2 Bedside Drawers & Open Bookcase Shelves, Rustic Brown",
    price: 230,
    oldPrice: 270,
    discount: 15,
    category: "bedroom",
    image:
      "Images/Antioch+Queen+Bed+Frame+with+2+Underbed+Drawers,+Modern+Platform+Bed+with+Charging+Station+&+LED+Light,+Storage+Headboard+with++2+Bedside+Drawers+&+Open+Bookcase+Shelves,+R.webp",
    rating: 4.5,
  },
  {
    name: "Martha Stewart Hayes Wooden Canopy Platform Bed With Headboard And Footboard",
    price: 492,
    oldPrice: 550,
    discount: 11,
    category: "bedroom",
    image:
      "Images/Martha+Stewart+Hayes+Wooden+Canopy+Platform+Bed+With+Headboard+And+Footboard.webp",
    rating: 5,
  },
  {
    name: "Havato Coutertop Ice Maker,Portable Stainless Steel Ice Maker Machine 44Lbs/24H Ice Cubes With Auto Self-Cleaning WF1-Z5820DN-BLACK",
    price: 221,
    oldPrice: 250,
    discount: 12,
    category: "kitchen",
    image:
      "Images/Havato+Coutertop+Ice+Maker,Portable+Stainless+Steel+Ice+Maker+Machine+44Lbs_24H+Ice+Cubes+With+Auto+Self-Cleaning-112093820.webp",
    rating: 5,
  },
  {
    name: "Ninja® Blender and Mega Kitchen System® with 4 Functions, 72 oz. Pitcher, 64 oz. Bowl, and (2) 24 oz. To-Go Cups",
    price: 180,
    oldPrice: 200,
    discount: 10,
    category: "kitchen",
    image:
      "Images/Ninja®+Blender+and+Mega+Kitchen+System®+with+4+Functions,+72+oz.+Pitcher,+64+oz.+Bowl,+and+(2)+24+oz.+To-Go+Cups.webp",
    rating: 5,
  },
  {
    name: "Hamilton Beach® 7 Quart Programmable Stay Or Go® Slow Cooker",
    price: 70,
    oldPrice: 85,
    discount: 18,
    category: "kitchen",
    image:
      "Images/Hamilton+Beach®+7+Quart+Programmable+Stay+Or+Go®+Slow+Cooker.webp",
    rating: 4.5,
  },
  {
    name: "Magnifique Slow Cooker Oval Manual Pot",
    price: 43,
    oldPrice: 50,
    discount: 14,
    category: "kitchen",
    image:
      "Images/Magnifique+Slow+Cooker+Oval+Manual+Pot-88779326-88779324.webp",
    rating: 4,
  },
  {
    name: "Samsung Family Hub Side-by-Side Refrigerator with Touch Screen RS27T5561SR/AA",
    price: 1372,
    oldPrice: 1500,
    discount: 20,
    category: "kitchen",
    image:
      "Images/Samsung+Family+Hub+Side-by-Side+Refrigerator+with+Touch+Screen-49425573.webp",
    rating: 5,
  },
  {
    name: "30 4.8 cu.ft. Freestanding Gas Range JGBS61RPSS",
    price: 659,
    oldPrice: 720,
    discount: 14,
    category: "kitchen",
    image: "Images/30_+4.8+cu.ft.+Freestanding+Gas+Range-50219102.webp",
    rating: 4.5,
  },
  {
    name: "Enegess 4 Drawer Storage Dresser Chest",
    price: 46,
    oldPrice: 55,
    discount: 16,
    category: "treasury",
    image: "Images/Enegess+4+Drawer+Storage+Dresser+Chest-188507081.webp",
    rating: 4,
  },
  {
    name: "Wakil 74H X 59W 6-Tier Large Wood Storage Bookcase",
    price: 185,
    oldPrice: 210,
    discount: 12,
    category: "treasury",
    image:
      "Images/Wakil+74_H+X+59_W+6-Tier+Large+Wood+Storage+Bookcase-1506212949.webp",
    rating: 4,
  },
  {
    name: "Heavy Duty 4-Tier Steel Shelves - Adjustable Storage Rack For Garage, Warehouse, Pantry & Toolsheds",
    price: 169,
    oldPrice: 190,
    discount: 11,
    category: "treasury",
    image:
      "Images/Heavy+Duty+4-Tier+Steel+Shelves+-+Adjustable+Storage+Rack+For+Garage,+Warehouse,+Pantry+&+Toolsheds-1450413742.webp",
    rating: 4.5,
  },
  {
    name: "4 Tier Stackable Foldable Storage Bins with Lid and Wheels (Set of 4)",
    price: 63,
    oldPrice: 75,
    discount: 16,
    category: "treasury",
    image:
      "Images/4+Tier+Stackable+Foldable+Storage+Bins+with+Lid+and+Wheels.webp",
    rating: 4,
  },
  {
    name: "Farmhouse 6/8 Cube Storage Organizer Bookcase, Horizontal Bookshelf With Anti-tip Hardware For Bedroom, Living Room, Office",
    price: 148,
    oldPrice: 170,
    discount: 13,
    category: "treasury",
    image:
      "Images/Farmhouse+6_8+Cube+Storage+Organizer+Bookcase,+Horizontal+Bookshelf+With+Anti-tip+Hardware+For+Bedroom,+Living+Room,+Office-918081823-918081820.webp",
    rating: 4.5,
  },
  {
    name: "Dresser For Bedroom With Clothes Rack, 6 Drawer Dresser With Shoe Rack, Charging Station & Led Lights",
    price: 168,
    oldPrice: 190,
    discount: 11,
    category: "treasury",
    image:
      "Images/Dresser+For+Bedroom+With+Clothes+Rack,+6+Drawer+Dresser+With+Shoe+Rack,+Charging+Station+&+Led+Lights-715440082.webp",
    rating: 4.5,
  },
  {
    name: "Sandrea 4-Door Armoire with Mirror and 6 Drawers",
    price: 410,
    oldPrice: 460,
    discount: 11,
    category: "treasury",
    image:
      "Images/Sandrea+4-Door+Armoire+with+Mirror+and+6+Drawers-682798570.webp",
    rating: 5,
  },
  {
    name: "70 Tall 4-door Wooden Wardrobe Closet With 2 Drawers & 3 Shelves, Freestanding Bedroom Armoire With Hanging Rod, Storage Cabinet For Clothes",
    price: 255,
    oldPrice: 290,
    discount: 12,
    category: "treasury",
    image:
      "Images/70_+Tall+4-door+Wooden+Wardrobe+Closet+With+2+Drawers+&+3+Shelves,+Freestanding+Bedroom+Armoire+With+Hanging+Rod,+Storage+Cabinet+For+Clothes-631605735.webp",
    rating: 4.5,
  },
];

function generateStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      // full star
      stars += '<i class="fa-solid fa-star"></i>';
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      // half star
      stars += '<i class="fa-solid fa-star-half-stroke"></i>';
    } else {
      // empty star
      stars += '<i class="fa-regular fa-star"></i>';
    }
  }
  return stars;
}
const grid = document.getElementById("productsGrid");

let visibleProducts = 8;

function displayProducts() {
  grid.innerHTML = "";
  let search = document.getElementById("searchInput").value.toLowerCase();
  let category = document.getElementById("categoryFilter").value;
  let price = document.getElementById("priceFilter").value;
  let filtered = products.filter((p) => {
    let matchName = p.name.toLowerCase().includes(search);
    let matchCategory = category === "all" || p.category === category;
    let matchPrice = true;

    if (price === "150") matchPrice = p.price < 150;
    if (price === "350") matchPrice = p.price >= 150 && p.price <= 350;
    if (price === "500") matchPrice = p.price >= 350 && p.price <= 500;
    if (price === "501") matchPrice = p.price > 500;

    return matchName && matchCategory && matchPrice;
  });

  window.addEventListener("DOMContentLoaded", () => {
    const selected = localStorage.getItem("selectedProduct");

    if (selected) {
      const product = products.find((p) => p.name === selected);

      if (product) {
        showProduct(product.name, product.image, product.price);
      }

      localStorage.removeItem("selectedProduct");
    }
  });

  filtered.slice(0, visibleProducts).forEach((product) => {
    let card = document.createElement("div");
    card.classList.add("product-card");
    const isSaved = isInWishlist(product.name);
    let priceHTML = "";

    if (product.oldPrice) {
      priceHTML = `
    <p class="price">
      <span class="old-price">$${product.oldPrice}</span>
      $${product.price}
    </p>
  `;
    } else {
      priceHTML = `<p class="price">$${product.price}</p>`;
    }
    card.innerHTML = `
${product.discount ? `<div class="badge">-${product.discount}%</div>` : ""}

<div class="wishlist ${isSaved ? "active" : ""}" 
onclick="toggleWishlist('${product.name}', ${product.price}, '${product.image}', ${product.rating}, this)">
<i class="fa-solid fa-heart"></i>
</div>

<img src="${product.image}">

<h3>${product.name}</h3>

${priceHTML}

<div class="rating">${generateStars(product.rating)}</div>

<button onclick="addToCart('${product.name}',${product.price},'${product.image}', ${product.rating})">
Add to Cart
</button>

<button onclick="showProduct('${product.name}','${product.image}','${product.price}')">
View Details
</button>
`;

    grid.appendChild(card);
  });
}

// ADD TO CART
function addToCart(name, price, image, rating) {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) {
    showToast("Please login to add to cart", "error");
    return;
  }

  const cartKey = "cart_" + user.email;
  let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

  const index = cart.findIndex((item) => item.name === name);
  if (index === -1) {
    cart.push({ name, price, image, rating, qty: 1 });
    showToast(`${name} added to cart 🛒`, "success");
  } else {
    cart[index].qty += 1;
    showToast(`Increased quantity of ${name} 🛒`, "success");
  }

  localStorage.setItem(cartKey, JSON.stringify(cart));
}

function addToWishlist(name, price, image) {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user) {
    showToast("Please login first");
    return;
  }

  let wishlist =
    JSON.parse(localStorage.getItem("wishlist_" + user.email)) || [];

  const exists = wishlist.find((item) => item.name === name);

  if (!exists) {
    wishlist.push({
      name: name,
      price: price,
      image: image,
      rating: rating,
    });

    localStorage.setItem("wishlist_" + user.email, JSON.stringify(wishlist));

    showToast("Added to wishlist ❤️");
  } else {
    showToast("Already in wishlist");
  }
}
function toggleWishlist(name, price, image, rating, element) {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user) {
    showToast("Please login first");
    return;
  }

  let wishlist =
    JSON.parse(localStorage.getItem("wishlist_" + user.email)) || [];

  const index = wishlist.findIndex((item) => item.name === name);

  if (index === -1) {
    wishlist.push({ name, price, image, rating });
    element.classList.add("active");
    showToast("Added to wishlist ❤️");
  } else {
    wishlist.splice(index, 1);
    element.classList.remove("active");
    showToast("Removed from wishlist");
  }

  localStorage.setItem("wishlist_" + user.email, JSON.stringify(wishlist));
}
function isInWishlist(name) {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user) return false;

  let wishlist =
    JSON.parse(localStorage.getItem("wishlist_" + user.email)) || [];

  return wishlist.some((item) => item.name === name);
}

function showProduct(name, image, price) {
  const product = products.find((p) => p.name === name);

  document.getElementById("productModal").style.display = "flex";
  document.getElementById("modalImg").src = image;
  document.getElementById("modalTitle").innerText = name;

  if (product.oldPrice) {
    document.getElementById("modalPrice").innerHTML =
      `<span class="old-price">$${product.oldPrice}</span> $${price}`;
  } else {
    document.getElementById("modalPrice").innerText = "$" + price;
  }

  document.getElementById("modalCartBtn").onclick = function () {
    addToCart(name, price, image, product.rating);
  };
}

document.getElementById("closeModal").onclick = function () {
  document.getElementById("productModal").style.display = "none";
};

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = `show ${type}`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.className = "";
  }, 3000);
}

document
  .getElementById("searchInput")
  .addEventListener("keyup", displayProducts);

document
  .getElementById("categoryFilter")
  .addEventListener("change", displayProducts);

document
  .getElementById("priceFilter")
  .addEventListener("change", displayProducts);

document.getElementById("loadMore").addEventListener("click", () => {
  visibleProducts += 4;

  displayProducts();
});

displayProducts();
