// Get the contact form
const form = document.querySelector("form");

// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the input values
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    // Show an alert with the input values
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
});
