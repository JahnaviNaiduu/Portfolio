document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const nameRegex = /^[A-Za-z]{2,30}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!nameRegex.test(firstName)) {
            alert("Enter valid First Name");
            return;
        }

        if (!nameRegex.test(lastName)) {
            alert("Enter valid Last Name");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Enter valid Email");
            return;
        }

        if (message.length < 10) {
            alert("Message must be at least 10 characters");
            return;
        }

        alert("Message submitted successfully!");
        form.reset();
    });

});
