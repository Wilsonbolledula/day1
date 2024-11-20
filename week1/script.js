document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Show the success message
    const successMessage = document.getElementById("successMessage");
    successMessage.classList.remove("hidden");

    // Optionally, clear the form inputs
    document.getElementById("registrationForm").reset();
});
