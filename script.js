// JavaScript for Interactivity

// Banner Slider Placeholder (for future functionality)
console.log("Script is running...");

// Contact Form Validation
document.querySelector("form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        event.preventDefault();
    } else {
        alert("Thank you for your message!");
    }
});
