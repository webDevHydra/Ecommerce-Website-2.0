//  const cartItemsContainer = document.getElementById("cart-items");
//         const cartTotalContainer = document.getElementById("cart-total");

// function getCart() {
//     const cart = localStorage.getItem("cart");
//     return cart ? JSON.parse(cart) : [];
// }

// function saveCart(cart) {
//     localStorage.setItem("cart", JSON.stringify(cart));
// }

// function addToCart(id, title, price, image) {
//     let cart = getCart();

//     const existingItem = cart.find(item => item.id === id);
//     if (existingItem) {
//         existingItem.quantity += 1;
//     } else {
//         cart.push({ id, title, price, image, quantity: 1 });
//     }

//     saveCart(cart);
//     alert("Item added to cart!");
//     updateCartCount(); 
// }

// function updateCartCount() {
//     const cart = getCart();
//     const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
//     const countElement = document.getElementById("cart-count");
//     if (countElement) {
//         countElement.textContent = totalCount;
//     }
// }
// updateCartCount();




// /**************************************Cart Logic*******656*******65***65*6*****/

// function addToCart(productId) {
//     const productMap = {
//         "shirt-100": {
//             title: "DEELMO Wine Shirt",
//             price: 399,
//             image: "Assets/img/Shopping/Shirt/DEELMO-Shirt.3.jpg"
//         },
//         "shirt-101": {
//             title: "DEELMO Black Shirt",
//             price: 479,
//             image: "Assets/img/Shopping/Shirt/Deelmo-Color-Options/Black/black1.jpg"
//         },
//         "shirt-102": {
//             title: "DEELMO Light Blue Shirt",
//             price: 479,
//             image: "Assets/img/Shopping/Shirt/Deelmo-Color-Options/Light-Blue/blue1.jpg"
//         },
//         "shirt-103": {
//             title: "DEELMO Light Green Shirt",
//             price: 479,
//             image: "Assets/img/Shopping/Shirt/Deelmo-Color-Options/Light-Green/green1.jpg"
//         },
//         "shirt-104": {
//             title: "DEELMO Pink Shirt",
//             price: 479,
//             image: "Assets/img/Shopping/Shirt/Deelmo-Color-Options/Pink/pink1.jpg"
//         },
//         "shirt-105": {
//             title: "DEELMO Peach Shirt",
//             price: 479,
//             image: "Assets/img/Shopping/Shirt/Deelmo-Color-Options/Peach/peach1.jpg"
//         },
//         "shirt-106": {
//             title: "DEELMO Chiku-Color Shirt",
//             price: 479,
//             image: "Assets/img/Shopping/Shirt/Deelmo-Color-Options/Chiku/chiku1.jpg"
//         },
//         "shoes-101": {
//             title: "Cruiser Sneaker for Men",
//             price: 999,
//             image: "Assets/img/Shopping/Shoes/shoes1.1.jpg"
//         },
//         "shoes-102": {
//             title: "Cruiser Sneaker for Men",
//             price: 1999,
//             image: "Assets/img/Shopping/Shoes/shoes4.1.jpg"
//         },
//         "shoes-103": {
//             title: "Cruiser Sneaker for Men",
//             price: 669,
//             image: "Assets/img/Shopping/Shoes/shoes3.1.webp"
//         },
//         "shoes-104": {
//             title: "Bata Men Pull On Loafers",
//             price: 340,
//             image: "Assets/img/Shopping/Shoes/shoes2.1.jpg"
//         },
        
//     };

//     const product = productMap[productId];
//     if (!product) {
//         alert("Invalid product ID!");
//         return;
//     }

//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push(product);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     alert("Added to cart!");

//     document.getElementById('cart-redirect').addEventListener("click", function() {
//         window.location.href = "cart.html"
//     });
// };


// document.addEventListener("DOMContentLoaded", () => {
//     const cartContainer = document.getElementById("cart-items");
//     const totalDisplay = document.getElementById("cart-total");
//     const clearCartBtn = document.getElementById("clear-cart");

//     let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

//     cartContainer.innerHTML = ""; // Clear before rendering
//     let total = 0;

//     if (cartItems.length === 0) {
//         cartContainer.innerHTML = "<p>Your cart is empty.</p>";
//         totalDisplay.textContent = "₹0";
//         return;
//     }

//     cartItems.forEach((item, index) => {
//         const price = Number(item.price); // Safely convert to number

//         if (!isNaN(price)) {
//             total += price;
//         }

//         const itemDiv = document.createElement("div");
//         itemDiv.classList.add("cart-item");
//         itemDiv.innerHTML = `
//             <img src="${item.image}" alt="${item.title}" width="100">
//             <div class="item-info">
//                 <h3>${item.title}</h3>
//                 <p>Price: ${price}</p>
//                 <button onclick="removeFromCart(${index})">Remove</button>
//             </div>
//         `;
//         cartContainer.appendChild(itemDiv);
//     });

//     const finalTotal = total + 89 + (total * 0.02);
//     totalDisplay.textContent = `${Math.round(finalTotal)}`;

//     clearCartBtn.addEventListener("click", () => {
//         localStorage.removeItem("cart");
//         location.reload();
//     });
// });

// function removeFromCart(index) {
//     let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     cartItems.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//     location.reload();
// }




//   const pageRedirects = {
//     Mens: "shirt.html",
//     Womens: "womens.html",
//     Electronics: "electronics.html",
//     Baby: "baby.html",
//     "Gift card": "giftcard.html"
//   };

//   document.getElementById("search-selection").addEventListener("change", function () {
//     const selected = this.value;
//     if (pageRedirects[selected]) {
//       window.location.href = pageRedirects[selected];
//     }
//   });


// /********************Email Connection******************/  

// (function(){
//   emailjs.init("-2BgsiXAzC1uqL02K");
// })();


// document.getElementById("emailForm").addEventListener("submit", function(e) {
//   e.preventDefault(); // Prevent form reload

//   const userEmail = document.getElementById("user-email").value;

//   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
//     user_email: userEmail,
//     order_summary: "Thanks for signing up!", // Static or dynamic
//     total_amount: "₹0"  // You can send dynamic bill here
//   })
//   .then(function(response) {
//     alert("Email sent successfully!");
//   }, function(error) {
//     console.log(error);
//     alert("Failed to send email.");
//   });
// });






const cartItemsContainer = document.getElementById("cart-items");
const cartTotalContainer = document.getElementById("cart-total");

function getCart() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id, title, price, image) {
    let cart = getCart();

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, title, price, image, quantity: 1 });
    }

    saveCart(cart);
    alert("Item added to cart!");
    updateCartCount(); 
}

function updateCartCount() {
    const cart = getCart();
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const countElement = document.getElementById("cart-count");
    if (countElement) {
        countElement.textContent = totalCount;
    }
}
updateCartCount();

/**************************************Cart Logic**********************************/

function addToCart(productId) {
    const productMap = {
        "shirt-100": {
            title: "DEELMO Wine Shirt",
            price: 399,
            image: "Assets/img/Shopping/Shirt/DEELMO-Shirt.3.jpg"
        },
        "shirt-101": {
            title: "DEELMO Black Shirt",
            price: 479,
            image: "Assets/img/Shopping/Shirt/Deelmo-Color-Options/Black/black1.jpg"
        },
        "shirt-102": {
            title: "DEELMO Light Blue Shirt",
            price: 479,
            image: "Assets/img/Shopping/Shirt/Deelmo-Color-Options/Light-Blue/blue1.jpg"
        },
        "shirt-103": {
            title: "DEELMO Light Green Shirt",
            price: 479,
            image: "Assets/img/Shopping/Shirt/Deelmo-Color-Options/Light-Green/green1.jpg"
        },
        "shirt-104": {
            title: "DEELMO Pink Shirt",
            price: 479,
            image: "Assets/img/Shopping/Shirt/Deelmo-Color-Options/Pink/pink1.jpg"
        },
        "shirt-105": {
            title: "DEELMO Peach Shirt",
            price: 479,
            image: "Assets/img/Shopping/Shirt/Deelmo-Color-Options/Peach/peach1.jpg"
        },
        "shirt-106": {
            title: "DEELMO Chiku-Color Shirt",
            price: 479,
            image: "Assets/img/Shopping/Shirt/Deelmo-Color-Options/Chiku/chiku1.jpg"
        },
        "shoes-101": {
            title: "Cruiser Sneaker for Men",
            price: 999,
            image: "Assets/img/Shopping/Shoes/shoes1.1.jpg"
        },
        "shoes-102": {
            title: "Cruiser Sneaker for Men",
            price: 1999,
            image: "Assets/img/Shopping/Shoes/shoes4.1.jpg"
        },
        "shoes-103": {
            title: "Cruiser Sneaker for Men",
            price: 669,
            image: "Assets/img/Shopping/Shoes/shoes3.1.webp"
        },
        "shoes-104": {
            title: "Bata Men Pull On Loafers",
            price: 340,
            image: "Assets/img/Shopping/Shoes/shoes2.1.jpg"
        },
    };

    const product = productMap[productId];
    if (!product) {
        alert("Invalid product ID!");
        return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");

    document.getElementById('cart-redirect').addEventListener("click", function() {
        window.location.href = "cart.html"
    });
};

document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("cart-total");
    const clearCartBtn = document.getElementById("clear-cart");

    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    cartContainer.innerHTML = "";
    let total = 0;

    if (cartItems.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalDisplay.textContent = "₹0";
        return;
    }

    cartItems.forEach((item, index) => {
        const price = Number(item.price);
        if (!isNaN(price)) total += price;

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

    const finalTotal = total + 89 + (total * 0.02);
    totalDisplay.textContent = `${Math.round(finalTotal)}`;

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

/******************** Page Redirect for Dropdown ******************/

const pageRedirects = {
    Mens: "shirt.html",
    Womens: "womens.html",
    Electronics: "electronics.html",
    Baby: "baby.html",
    "Gift card": "giftcard.html"
};

document.getElementById("search-selection").addEventListener("change", function () {
    const selected = this.value;
    if (pageRedirects[selected]) {
        window.location.href = pageRedirects[selected];
    }
});

/******************** EmailJS Integration (CDN required) ******************/

(function(){
    emailjs.init("-2BgsiXAzC1uqL02K"); // replace with your EmailJS public key
})();

document.getElementById("emailForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const userEmail = document.getElementById("user-email").value;
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Cart is empty. Cannot send email.");
        return;
    }

    
    let orderSummary = cart.map(item => `• ${item.title} - ₹${item.price}`).join("\n");


    let subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    let delivery = 89;
    let handling = subtotal * 0.02;
    let finalTotal = subtotal + delivery + handling;


    emailjs.send("service_77rexr7", "template_7p3rs1d", {
        user_email: userEmail,
        order_summary: orderSummary,
        total_amount: `₹${finalTotal.toFixed(2)}`
    })
    .then(function(response) {
        alert("Order email sent successfully!");
    }, function(error) {
        console.log(error);
        alert("Failed to send email.");
    });
});



