// Use window.onload to ensure everything is loaded
window.onload = function() {
    // Get menu button and mobile menu elements
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileSearchBtn = document.getElementById("mobileSearchBtn");
    
    // Check if elements exist before adding listeners
    if (menuBtn && mobileMenu) {
        // Add click event to menu button
        menuBtn.onclick = function() {
            // Toggle between showing and hiding
            if (mobileMenu.style.display === "block") {
                mobileMenu.style.display = "none";
            } else {
                mobileMenu.style.display = "block";
            }
            console.log("Menu button clicked"); // Debug message
        };
    } else {
        console.error("Menu button or mobile menu not found");
    }
    
    // Mobile search functionality
    if (mobileSearchBtn) {
        mobileSearchBtn.onclick = function() {
            console.log("Search button clicked"); // Debug message
            
            let searchContainer = document.getElementById("mobileSearchContainer");
            
            if (searchContainer) {
                searchContainer.remove();
            } else {
                // Create search field
                searchContainer = document.createElement("div");
                searchContainer.id = "mobileSearchContainer";
                searchContainer.style.padding = "10px";
                searchContainer.style.backgroundColor = "#fff";
                searchContainer.style.borderTop = "1px solid #eee";
                
                searchContainer.innerHTML = `
                    <div style="display: flex; background-color: #F0F0F0; border-radius: 25px; padding: 8px 16px;">
                        <i class="bi bi-search" style="color: #909090; margin-right: 8px;"></i>
                        <input
                            type="text"
                            style="background-color: #F0F0F0; border: none; width: 100%; outline: none; color:black;"
                            placeholder="Search for products..."
                        />
                    </div>
                `;
                
                // Insert after mobile menu
                mobileMenu.parentNode.insertBefore(searchContainer, mobileMenu.nextSibling);
            }
        };
    } else {
        console.error("Mobile search button not found");
    }
};