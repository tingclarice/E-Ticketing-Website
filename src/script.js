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