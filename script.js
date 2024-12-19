// Wait until the DOM content is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Create the "Back to Top" button
    let backToTopButton = document.createElement("button");
    backToTopButton.innerText = "Back to Top";
    backToTopButton.id = "backToTop";
    document.body.appendChild(backToTopButton);

    // Style the button (You can also move this to your CSS)
    backToTopButton.style.position = "fixed";
    backToTopButton.style.bottom = "20px";
    backToTopButton.style.right = "20px";
    backToTopButton.style.backgroundColor = "#007BFF";
    backToTopButton.style.color = "white";
    backToTopButton.style.border = "none";
    backToTopButton.style.padding = "15px";
    backToTopButton.style.borderRadius = "5px";
    backToTopButton.style.fontSize = "16px";
    backToTopButton.style.cursor = "pointer";
    backToTopButton.style.display = "none"; // Initially hidden
    backToTopButton.style.zIndex = "1000"; // Ensure it's on top of other content

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block"; // Show the button
        } else {
            backToTopButton.style.display = "none"; // Hide the button
        }
    };

    // When the user clicks the button, scroll to the top of the document
    backToTopButton.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll back to the top
        });
    };
});
