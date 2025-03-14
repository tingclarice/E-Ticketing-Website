document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.querySelector(".relative button");
    const dropdownMenu = document.querySelector(".relative .absolute");
  
    if (dropdownButton && dropdownMenu) {
      dropdownButton.addEventListener("click", function () {
        const isExpanded = dropdownButton.getAttribute("aria-expanded") === "true";
        dropdownButton.setAttribute("aria-expanded", !isExpanded);
        dropdownMenu.classList.toggle("hidden");
      });
  
      // Close dropdown when clicking outside
      document.addEventListener("click", function (event) {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownButton.setAttribute("aria-expanded", "false");
          dropdownMenu.classList.add("hidden");
        }
      });
    }
});

// Mobile Dropdown 2
document.addEventListener("DOMContentLoaded", function () {
  // Select menu button and mobile menu container
  const menuButton = document.getElementById("hamburgerButton"); // Hamburger button
  const mobileMenu = document.getElementById("mobileMenu"); // Mobile menu
  const closeButton = mobileMenu?.querySelector("#mobileCloseButton"); // Close button inside the menu

  if (!menuButton || !mobileMenu) {
      console.error("Menu button or mobile menu not found.");
      return;
  }

  // Ensure the menu is hidden by default
  mobileMenu.classList.add("hidden");

  // Toggle menu when clicking the hamburger button
  menuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
  });

  // Close menu when clicking the close button (if exists)
  closeButton?.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
  });

  // Close menu when clicking outside of it
  document.addEventListener("click", function (event) {
      const isClickInsideMenu = mobileMenu.contains(event.target);
      const isClickOnMenuButton = menuButton.contains(event.target);

      if (!isClickInsideMenu && !isClickOnMenuButton) {
          mobileMenu.classList.add("hidden");
      }
  });

  // Handle dropdown toggle inside the mobile menu
  const dropdownButton = mobileMenu?.querySelector("[aria-controls='disclosure-1']");
  const dropdownMenu = mobileMenu?.querySelector("#disclosure-1");

  dropdownButton?.addEventListener("click", function () {
      const isExpanded = dropdownButton.getAttribute("aria-expanded") === "true";
      dropdownButton.setAttribute("aria-expanded", !isExpanded);
      dropdownMenu?.classList.toggle("hidden");

      // Toggle the arrow icon rotation
      dropdownButton.querySelector("svg")?.classList.toggle("rotate-180");
  });
});

const iconCart = document.querySelector('.icon-cart');
const closeCart = document.querySelector('.close');
const body = document.querySelector('body');
const cartTab = document.querySelector('.cartTab');


// iconCart.addEventListener('click', () => {
//   body.classList.toggle('showCart');
// })

iconCart.addEventListener('click', () => {
  body.classList.toggle('showCart');
  document.querySelector('.container').classList.toggle('move-left');
})



iconCart.addEventListener('click', () => {
  const isVisible = body.classList.contains('showCart');
  console.log("is visible : " + isVisible);
  cartTab.setAttribute('aria-hidden', !isVisible);
})

closeCart.addEventListener('click', () => {
  body.classList.remove('showCart');
})

// Mobile dropdown
  // document.addEventListener("DOMContentLoaded", function () {
  //     // Select menu button and mobile menu container
  //     const menuButton = document.querySelector(".lg:hidden button"); // Button to open/close mobile menu
  //     const mobileMenu = document.querySelector(".lg\\:hidden.fixed.inset-0.z-50"); // Mobile menu container
  //     const closeButton = mobileMenu.querySelector("button[aria-label='Close menu']"); // Close button inside the mobile menu

  //     // Toggle mobile menu visibility
  //     menuButton.addEventListener("click", function () {
  //         mobileMenu.classList.toggle("hidden");
  //     });

  //     // Close menu when clicking the close button
  //     closeButton.addEventListener("click", function () {
  //         mobileMenu.classList.add("hidden");
  //     });

  //     // Close menu when clicking outside of it
  //     document.addEventListener("click", function (event) {
  //       const isClickInsideMenu = mobileMenu.contains(event.target);
  //       const isClickOnMenuButton = menuButton.contains(event.target);
  //         if (!isClickInsideMenu && !isClickOnMenuButton) {
  //             mobileMenu.classList.add("hidden");
  //         }
  //     });

  //     // Handle dropdown toggle inside the mobile menu
  //     const dropdownButton = mobileMenu.querySelector("[aria-controls='disclosure-1']");
  //     const dropdownMenu = mobileMenu.querySelector("#disclosure-1");

  //     dropdownButton.addEventListener("click", function () {
  //         const isExpanded = dropdownButton.getAttribute("aria-expanded") === "true";
  //         dropdownButton.setAttribute("aria-expanded", !isExpanded);
  //         dropdownMenu.classList.toggle("hidden");

  //         // Toggle the arrow icon rotation
  //         dropdownButton.querySelector("svg").classList.toggle("rotate-180");
  //     });
  // });

  document.getElementById('shopping-cart').addEventListener('click', function() {
    document.querySelector('body').classList.toggle('showCart');
    document.querySelector('.container').classList.toggle('move-left');
  });  

  // Event data
const events = [
  {
    id: 1,
    name: "Concert 1",
    date: "2025-04-01",
    time: "19:00",
    price: 20.00,
    seatsAvailable: 100
  },
  {
    id: 2,
    name: "Concert 2",
    date: "2025-04-15",
    time: "20:00",
    price: 30.00,
    seatsAvailable: 50
  },
  {
    id: 3,
    name: "Concert 3",
    date: "2025-05-01",
    time: "21:00",
    price: 40.00,
    seatsAvailable: 200
  }
];

// Shopping cart data
let cart = [];

// Function to render events
function renderEvents() {
  const eventList = document.getElementById('event-list');
  eventList.innerHTML = ''; // Clear previous events

  events.forEach(event => {
    const eventHTML = `
      <div class="relative flex flex-col ml-20 my-6 bg-white shadow-sm border border-gray-300 rounded-lg w-64 h-40">
        <div class="relative h-40 m-0.5 overflow-hidden text-white rounded-md">
          <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="card-image" />
        </div>
        <div class="p-4 pb-0.5">
          <h6 class="mb-2 text-slate-800 text-xl font-semibold">
            ${event.name}
          </h6>
          <p class="text-slate-600 leading-normal font-light">
            Date: ${event.date}
          </p>
          <p class="text-slate-600 leading-normal font-light">
            Time: ${event.time}
          </p>
          <p class="text-slate-600 leading-normal font-light">
            Price: $${event.price}
          </p>
          <p class="pt-2 font-medium text-slate-600 leading-normal font-light">
            ${event.seatsAvailable} Seats Left! 
          </p>
        </div>
        <div class="flex space-x-2 space-y-2 flex-wrap justify-center items-baseline">
          <button class="font-semibold rounded-lg px-4 py-2 bg-blue-700 text-white hover:bg-blue-700 duration-300" data-event-id="${event.id}">Buy Ticket</button>
        </div>
      </div>
    `;
    eventList.insertAdjacentHTML('beforeend', eventHTML);
  });
}

renderEvents();

// Handle buy ticket button clicks
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('font-semibold') && event.target.dataset.eventId) {
    const eventId = event.target.dataset.eventId;
    const selectedEvent = events.find(event => event.id == eventId);
    console.log("button 1")

    if (selectedEvent) {
      // Add event to cart
      addToCart(selectedEvent);
      // Update seats available
      selectedEvent.seatsAvailable--;
      renderEvents(); // Update event list
      console.log("button 2")
      console.log("selected event: " + JSON.stringify(selectedEvent, null, 2));      
    }
  }
});

// Function to add item to cart
function addToCart(event) {
  const existingItem = cart.find(item => item.id === event.id);
  if (existingItem) {
    existingItem.quantity++;
    console.log("updating quantity")
  } else {
    cart.push({ id: event.id, name: event.name, price: event.price, quantity: 1 });
    console.log("inserting new item")
  }
  updateCartUI();
}

// Function to update cart UI
function updateCartUI() {
  console.log("items in cart : " + JSON.stringify(cart, null, 2))
  const cartContainer = document.querySelector('.listCart');
  cartContainer.innerHTML = ''; // Clear previous cart content

  cart.forEach(item => {
    console.log("item name :", item.name)
    const cartItemHTML = `
      <div class="item">
        <div class="image">
          <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="product-image" />
        </div>
        <div class="name">${item.name}</div>
        <div class="totalPrice">${item.price}</div>
        <div class="quantity">
          <span class="minus" data-item-id="${item.id}">-</span>
          <span>${item.quantity}</span>
          <span class="plus" data-item-id="${item.id}">+</span>
        </div>
      </div>
    `;
    cartContainer.insertAdjacentHTML('beforeend', cartItemHTML);
  });

  // Display total items purchased
  // const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  // document.querySelector('.btn').insertAdjacentHTML('beforebegin', `<p>Total Items: ${totalItems}</p>`);

    // Display total items purchased
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    // Find or create the <p> element
    let totalItemsElement = document.querySelector('.total-items');
    if (!totalItemsElement) {
      totalItemsElement = document.createElement('p');
      totalItemsElement.classList.add('total-items'); // Add a class to find it later
      document.querySelector('.btn').insertAdjacentElement('beforebegin', totalItemsElement);
    }
    
    // Update the content of the <p> element
    totalItemsElement.textContent = `Total Items: ${totalItems}`;
}

// Handle quantity changes in cart
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('plus')) {
    const itemId = event.target.dataset.itemId;
    const itemInCart = cart.find(item => item.id == itemId);
    if (itemInCart) {
      itemInCart.quantity++;
      updateCartUI();
      // Check if event still has seats available
      const event = events.find(event => event.id == itemId);
      if (event && event.seatsAvailable > 0) {
        event.seatsAvailable--;
        renderEvents(); // Update event list
      } else {
        alert('No more seats available for this event.');
        itemInCart.quantity--; // Revert quantity change
        updateCartUI();
      }
    }
  } else if (event.target.classList.contains('minus')) {
    const itemId = event.target.dataset.itemId;
    const itemInCart = cart.find(item => item.id == itemId);
    if (itemInCart && itemInCart.quantity > 0) {
      itemInCart.quantity--;
      updateCartUI();
      // Update seats available
      const event = events.find(event => event.id == itemId);
      if (event) {
        event.seatsAvailable++;
        renderEvents(); // Update event list
      }
    }
  }
});

// Handle checkout button click
document.querySelector('.checkOut').addEventListener('click', function() {
  if (confirm("Are you sure you want to proceed to checkout?")) {
    // Clear cart contents
    cart = [];
    updateCartUI();
    // Optionally, you can redirect to a checkout page here
  }
});

// Handle close cart button click
document.querySelector('.close-cart-button').addEventListener('click', function() {
  document.querySelector('body').classList.remove('showCart');
  document.querySelector('.container').classList.remove('move-left');
});

// Handle cart icon click
document.getElementById('shopping-cart').addEventListener('click', function() {
  document.querySelector('body').classList.toggle('showCart');
  document.querySelector('.container').classList.toggle('move-left');
});

// Handle close button click in cart
document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('body').classList.remove('showCart');
  document.querySelector('.container').classList.remove('move-left');
});

