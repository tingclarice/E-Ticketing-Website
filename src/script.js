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

// Mobile dropdown
document.addEventListener("DOMContentLoaded", function () {
    // Select menu button and mobile menu container
    const menuButton = document.querySelector(".lg:hidden button"); // Button to open/close mobile menu
    const mobileMenu = document.querySelector(".lg:hidden"); // Mobile menu container
    const closeButton = mobileMenu.querySelector("button"); // Close button inside the mobile menu

    // Toggle mobile menu visibility
    menuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });

    // Close menu when clicking the close button
    closeButton.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
    });

    // Close menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
            mobileMenu.classList.add("hidden");
        }
    });

    // Handle dropdown toggle inside the mobile menu
    const dropdownButton = document.querySelector("[aria-controls='disclosure-1']");
    const dropdownMenu = document.querySelector("#disclosure-1");

    dropdownButton.addEventListener("click", function () {
        const isExpanded = dropdownButton.getAttribute("aria-expanded") === "true";
        dropdownButton.setAttribute("aria-expanded", !isExpanded);
        dropdownMenu.classList.toggle("hidden");

        // Toggle the arrow icon rotation
        dropdownButton.querySelector("svg").classList.toggle("rotate-180");
    });
});
