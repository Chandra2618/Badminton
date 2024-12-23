// Create the Go to Top button
const goToTopButton = document.createElement('button');
goToTopButton.textContent = 'Go to Top';
goToTopButton.className = 'go-to-top-button';

// Add styles for the Go to Top button
const style = document.createElement('style');
style.textContent = `
    .go-to-top-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 20px;
        background-color: #28a745;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        z-index: 1000;
    }
    .go-to-top-button:hover {
        background-color: #218838;
    }
    .login-button {
        position: fixed;
        top: 10px;
        right: 10px;
        padding: 10px 20px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        z-index: 1000;
    }
    .login-button:hover {
        background-color: #0056b3;
    }
`;
document.head.appendChild(style);

// Add a click event listener for the Go to Top button
goToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Append the Go to Top button to the body
document.body.appendChild(goToTopButton);

// Create the login button
const loginButton = document.createElement('button');
loginButton.textContent = 'Login';
loginButton.className = 'login-button';

// Add a click event listener for the Login button
loginButton.addEventListener('click', () => {
    alert('Redirecting to login page...');
    // Redirect to login page (replace with your actual login page URL)
    window.location.href = '/login';
});

// Append the login button to the body
document.body.appendChild(loginButton);
