const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const menuToggler = document.querySelector(".menu-toggler");
const mainContent = document.querySelector(".main-content");

const collapsedSidebarHeight = "56px";
const fullSidebarHeight = "calc(100vh - 32px)";

// Toggle the sidebar visibility and adjust main content margin
const toggleSidebar = () => {
	sidebar.classList.toggle("collapsed");
	mainContent.style.marginLeft = sidebar.classList.contains("collapsed")
		? "0"
		: "250px";
};

// Event listener for sidebar toggler
sidebarToggler.addEventListener("click", toggleSidebar);

// Function to toggle the menu active state
const toggleMenu = (isMenuActive) => {
	sidebar.style.height = isMenuActive
		? `${sidebar.scrollHeight}px`
		: collapsedSidebarHeight;
	menuToggler.querySelector("span").innerText = isMenuActive ? "close" : "menu";
};

// Event listener for menu toggler
menuToggler.addEventListener("click", () => {
	toggleMenu(sidebar.classList.toggle("menu-active"));
});

// Adjust layout on window resize
window.addEventListener("resize", () => {
	if (window.innerWidth >= 1024) {
		sidebar.style.height = fullSidebarHeight;
		mainContent.style.marginLeft = "250px";
	} else {
		sidebar.classList.remove("collapsed");
		sidebar.style.height = "auto";
		mainContent.style.marginLeft = "0";
		toggleMenu(sidebar.classList.contains("menu-active"));
	}
});

document.addEventListener("DOMContentLoaded", function () {
	const sidebar = document.querySelector(".sidebar");
	const mainContent = document.getElementById("mainContent");
	const sidebarToggleButton = document.getElementById("toggleButton");
	const header = document.querySelector(".header"); // Select the header

	// Check if the sidebar, button, and header exist
	if (sidebar && sidebarToggleButton && header) {
		sidebarToggleButton.addEventListener("click", function () {
			sidebar.classList.toggle("collapsed"); // Toggle the collapsed class
			header.classList.toggle("collapsed"); // Toggle a class for header transition

			// Update aria-expanded attribute for accessibility
			const isCollapsed = sidebar.classList.contains("collapsed");
			sidebarToggleButton.setAttribute("aria-expanded", !isCollapsed);
		});
	}
});


