document.addEventListener("DOMContentLoaded", function() {
    // Show the appropriate page based on URL
    const path = window.location.pathname;
    if (path.endsWith('register.html')) {
        document.querySelector('.register-page').style.display = 'block';
    } else if (path.endsWith('verify.html')) {
        document.querySelector('.verify-page').style.display = 'block';
    } else if (path.endsWith('login.html')) {
        document.querySelector('.login-page').style.display = 'block';
    } else if (path.endsWith('main.html')) {
        document.querySelector('.main-page').style.display = 'block';
    }

    // Handle registration form submission
    document.getElementById("register-form")?.addEventListener("submit", function(e) {
        e.preventDefault();
        const email = document.getElementById("register-email").value;
        // Send an email verification request (implement server-side email sending)
        console.log("Send verification email to:", email);
        window.location.href = 'verify.html';
    });

    // Handle verification form submission
    document.getElementById("verify-form")?.addEventListener("submit", function(e) {
        e.preventDefault();
        // Validate the verification code and email (implement server-side verification)
        window.location.href = 'login.html';
    });

    // Handle login form submission
    document.getElementById("login-form")?.addEventListener("submit", function(e) {
        e.preventDefault();
        // Validate email and password (implement server-side validation)
        window.location.href = 'main.html';
    });
});

// Change the language of the page
function changeLanguage() {
    const lang = document.getElementById("language-select").value;
    // Implement language change functionality
    console.log("Language changed to:", lang);
}

// Open the channels page
function openChannels() {
    document.querySelector('.main-page').style.display = 'none';
    document.querySelector('.channels-page').style.display = 'block';
}

// Go back to the previous page
function goBack() {
    document.querySelector('.channels-page').style.display = 'none';
    document.querySelector('.main-page').style.display = 'block';
}

// Handle profile picture upload
function uploadProfilePic() {
    // Implement file upload logic
    console.log("Upload profile picture");
}

// Open settings dialog
function openSettings() {
    // Implement settings dialog
    console.log("Open settings");
}