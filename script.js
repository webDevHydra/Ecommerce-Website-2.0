/***********************************Redirects************************************/
document.getElementById("shopping1").addEventListener("click", function() {
    window.location.href = "";
});

document.getElementById("cart-redirect").addEventListener("click", function() {
    window.location.href="cart.html"; 
});










/****************************************Search Results*******************************/


 const input = document.getElementById('searchInput');
  const button = document.getElementById('searchButton');

  function searchPage() {
    const query = input.value.trim().toLowerCase();
    if (query) {
      window.location.href = `${query}.html`;
    }
  }

  button.addEventListener('click', searchPage);
  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') searchPage();
  });


document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("cart-total");
    const clearCartBtn = document.getElementById("clear-cart");

    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    cartContainer.innerHTML = ""; // Clear before rendering
    let total = 0;

    if (cartItems.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalDisplay.textContent = "₹0";
        return;
    }

    cartItems.forEach((item, index) => {
        const price = Number(item.price); // Safely convert to number

        if (!isNaN(price)) {
            total += price;
        }

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.title}" width="100">
            <div class="item-info">
                <h3>${item.title}</h3>
                <p>Price: ₹${price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        cartContainer.appendChild(itemDiv);
    });

    // Final total: item prices + 89 delivery + 2% handling
    const finalTotal = total + 89 + (total * 0.02);
    totalDisplay.textContent = `₹${Math.round(finalTotal)}`;

    clearCartBtn.addEventListener("click", () => {
        localStorage.removeItem("cart");
        location.reload();
    });
});

function removeFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    location.reload();
}


function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const countElement = document.getElementById("cart-count");

    if (countElement) {
        countElement.textContent = cart.length;
    }
}

document.addEventListener("DOMContentLoaded", updateCartCount);


/*************************************Side Previews***********41$4*************/

const previewElements = document.querySelectorAll(".side-previews");
  const mainImage = document.getElementById("mainImage");

  previewElements.forEach(preview => {
    preview.addEventListener("mouseenter", () => {
      const imageUrl = preview.getAttribute("data-image");
      mainImage.src = imageUrl;
    });
  });
    
    const previewElement = document.querySelectorAll(".c-opt");
  const mainImg = document.getElementById("mainImage");

  previewElement.forEach(preview => {
    preview.addEventListener("mouseenter", () => {
      const imageUrl = preview.getAttribute("data-image");
      mainImg.src = imageUrl;
    });
  });




  document.getElementById("search-selection").addEventListener("change", function () {
    const selected = this.value;

    if (selected === "Mens") {
      window.location.href = "shirt.html";
    } else if (selected === "Womens") {
      window.location.href = "womens.html";
    } else if (selected === "Electronics") {
      window.location.href = "electronics.html";
    } else if (selected === "Baby") {
      window.location.href = "baby.html";
    } else if (selected === "Gift card") {
      window.location.href = "giftcard.html";
    } else if (selected === "Mens Shirts") {
      window.location.href = "shirt.html";
    } else if (selected === "Mens Shoes") {
      window.location.href = "shoes.html";
    }
  });
