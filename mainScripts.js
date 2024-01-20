/**
 * Animation on scroll function and init
 */
function aos_init() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
        mirror: false
    });
}
window.addEventListener('load', () => {
    aos_init();
});


/* Home Page */

document.addEventListener("DOMContentLoaded", function() {

    const preloader = document.querySelector('#preloader');

    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove();
        });
    }

    const scrollTop = document.querySelector('.scroll-top');

    if (scrollTop) {
        const toggleScrollTop = function() {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        };

        window.addEventListener('load', toggleScrollTop);
        document.addEventListener('scroll', toggleScrollTop);

        scrollTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    function animateNumbers(targetId, endValue, duration, step) {
        const element = document.getElementById(targetId);
        const startValue = 0;
        const startTime = performance.now();

        function updateNumber(timestamp) {
            const progress = timestamp - startTime;
            const increment = (endValue - startValue) * (progress / duration) * step;

            element.textContent = Math.round(startValue + increment);

            if (progress < duration) {
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = endValue;
            }
        }

        requestAnimationFrame(updateNumber);
    }

    // Set your desired animation duration in milliseconds
    const animationDuration = 2000;

    // Call the function for each number with the corresponding step value
    animateNumbers('count1', 750, animationDuration, 1);
    animateNumbers('count2', 24, animationDuration, 1);
    animateNumbers('count3', 6, animationDuration, 1);
    animateNumbers('count5', 750, animationDuration, 1);
    animateNumbers('count6', 24, animationDuration, 1);
    animateNumbers('count7', 6, animationDuration, 1);

    function updateCount(countElementId, finalValue) {
        var countElement = document.getElementById(countElementId);
        var currentCount = parseFloat(countElement.innerText);

        function update() {
            if (currentCount < finalValue) {
                currentCount += 0.1;
                countElement.innerText = currentCount.toFixed(1);
                setTimeout(update, 40);
            }
        }

        update();
    }

    // Start updating count for count4
    updateCount('count4', 4.8);

    // Start updating count for count8
    updateCount('count8', 4.8);

});



/* Products Page */

function openModal(modalId) {
    // Close the currently open modal
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        $(modal).modal('hide'); // Use Bootstrap's hide method
    });

    // Open the specified modal
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
        $(targetModal).modal('show'); // Use Bootstrap's show method
    }
}


function whatsappOrder(button) {
    // Get the data attributes from the button
    var componentName = button.getAttribute("data-component");
    var componentPrice = button.getAttribute("data-price");

    // Create the WhatsApp message
    var whatsappMessage = "I would like to order " + componentName + " for Rs." + componentPrice;

    // Construct the WhatsApp link
    var whatsappLink = "https://wa.me/8122005640?text=" + encodeURIComponent(whatsappMessage);

    // Redirect to WhatsApp
    window.location.href = whatsappLink;
}

function emailWebProductOrder(button) {
    // Get the data attributes from the button
    var componentName = button.getAttribute("data-component");
    var componentPrice = button.getAttribute("data-price");
    var emailSubject = "Order for " + componentName;
    var emailBody = "I would like to order " + componentName + " for Rs." + componentPrice;

    // Replace 'recipient@example.com' with the actual recipient's email address
    var recipientEmail = 'praveensuman701@gmail.com';

    // Construct the Gmail compose email link with pre-filled recipient
    var gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(recipientEmail) + "&su=" + encodeURIComponent(emailSubject) + "&body=" + encodeURIComponent(emailBody);

    // Open the email link in a new tab or window
    window.open(gmailLink, '_blank');
}

function emailAppProductOrder(button) {
    // Get the data attributes from the button
    var componentName = button.getAttribute("data-component");
    var componentPrice = button.getAttribute("data-price");
    var emailSubject = "Order for " + componentName;
    var emailBody = "I would like to order " + componentName + " for Rs." + componentPrice;

    // Replace 'recipient@example.com' with the actual recipient's email address
    var recipientEmail = 'praveensuman701@gmail.com';

    // Construct the email link
    var emailLink = "mailto:praveensuman701@gmail.com?subject=" + encodeURIComponent(emailSubject) + "&body=" + (emailBody);

    // Redirect to Email
    window.location.href = emailLink;
}

function whatsappEnquiry(button) {
    // Get the data attributes from the button
    var componentName = button.getAttribute("data-component");
    var componentPrice = button.getAttribute("data-price");

    // Create the WhatsApp message
    var whatsappMessage = "I would like to enquire about " + componentName + ".%0A Price: Rs." + componentPrice;

    // Construct the WhatsApp link
    var whatsappLink = "https://wa.me/8122005640?text=" + (whatsappMessage);

    // Redirect to WhatsApp
    window.location.href = whatsappLink;
}

function emailWebProductEnquiry(button) {
    // Get the data attributes from the button
    var componentName = button.getAttribute("data-component");
    var componentPrice = button.getAttribute("data-price");

    var emailSubject = "Enquiry about " + componentName;
    var emailBody = "I would like to enquire about " + componentName + ".%0D%0A Price: Rs." + componentPrice;

    // Replace 'recipient@example.com' with the actual recipient's email address
    var recipientEmail = 'praveensuman701@gmail.com';

    // Construct the Gmail compose email link with pre-filled recipient
    var gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(recipientEmail) + "&su=" + encodeURIComponent(emailSubject) + "&body=" + (emailBody);

    // Open the email link in a new tab or window
    window.open(gmailLink, '_blank');
}

function emailAppProductEnquiry(button) {
    // Get the data attributes from the button
    var componentName = button.getAttribute("data-component");
    var componentPrice = button.getAttribute("data-price");

    var emailSubject = "Enquiry about " + componentName;
    var emailBody = "I would like to enquire about " + componentName + ".%0D%0A Price: Rs." + componentPrice;

    // Construct the email link
    var emailLink = "mailto:praveensuman701@gmail.com?subject=" + encodeURIComponent(emailSubject) + "&body=" + (emailBody);

    // Redirect to Email
    window.location.href = emailLink;
}


/* Service Section */

function whatsappServiceEnquiry(button) {
    // Get the data attributes from the button
    var componentName = button.getAttribute("data-component");

    // Create the WhatsApp message
    var whatsappMessage = "Service Name: " + componentName + ".%0AI would like to enquire about ";

    // Construct the WhatsApp link
    var whatsappLink = "https://wa.me/8122005640?text=" + (whatsappMessage);

    // Redirect to WhatsApp
    window.location.href = whatsappLink;
}

function emailAppServiceEnquiry(button) {
    // Get the data attributes from the button
    var componentName = button.getAttribute("data-component");


    // Create the email subject and body
    var emailSubject = "Enquiry about " + componentName;
    var emailBody = "Service Name: " + componentName + ".%0D%0AI would like to enquire about ";

    // Construct the email link
    var emailLink = "mailto:praveensuman701@gmail.com?subject=" + encodeURIComponent(emailSubject) + "&body=" + (emailBody);

    // Redirect to Email
    window.location.href = emailLink;
}

function emailWebServiceEnquiry(button) {
    // Get the data attributes from the button
    var componentName = button.getAttribute("data-component");

    var emailSubject = "Enquiry about " + componentName;
    var emailBody = "Service Name: " + componentName + ".%0D%0AI would like to enquire about ";

    // Replace 'recipient@example.com' with the actual recipient's email address
    var recipientEmail = 'praveensuman701@gmail.com';

    // Construct the Gmail compose email link with pre-filled recipient
    var gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(recipientEmail) + "&su=" + encodeURIComponent(emailSubject) + "&body=" + (emailBody);

    // Open the email link in a new tab or window
    window.open(gmailLink, '_blank');



}


/* Contact Section */
// Enquiry Form Validation 
function validateForm() {
    var name = document.getElementById('name').value;
    var whatsapp = document.getElementById('whatsapp').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var enquiry = document.getElementById('enquiry').value;

    // Clear previous error messages
    clearErrors();

    // Validate each field
    var isValid = true;
    if (name === '') {
        displayError('name-error', 'Required*');
        isValid = false;
    }
    if (whatsapp === '') {
        displayError('whatsapp-error', 'Required*');
        isValid = false;
    }
    if (address === '') {
        displayError('address-error', 'Required*');
        isValid = false;
    }
    if (enquiry === '') {
        displayError('enquiry-error', 'Required*');
        isValid = false;
    }

    // If Email is provided, validate its format
    if (email !== '' && !isValidEmail(email)) {
        displayError('email-error', 'Please enter a valid email address.');
        isValid = false;
    }

    return isValid;
}

function sendEmail() {
    // Validate the form before redirecting to the email
    if (validateForm()) {
        var name = encodeURIComponent(document.getElementById('name').value);
        var email = encodeURIComponent(document.getElementById('email').value);
        var address = encodeURIComponent(document.getElementById('address').value);
        var enquiry = encodeURIComponent(document.getElementById('enquiry').value);

        var subject = ('Enquiry from ' + name);
        var emailMessage = `Name: ${name}%0D%0AEmail: ${email}%0D%0AAddress: ${address}%0D%0AEnquiry: ${enquiry}`;

        // Construct Email message URL
        var emailURL = `mailto:praveensuman701@gmail.com?subject=${subject}&body=${emailMessage}`;

        // Redirect to Email
        window.location.href = emailURL;
    }
}

function sendWhatsapp() {
    // Validate the form before sending WhatsApp message
    if (validateForm()) {
        var name = encodeURIComponent(document.getElementById('name').value);
        var whatsapp = encodeURIComponent(document.getElementById('whatsapp').value);
        var address = encodeURIComponent(document.getElementById('address').value);
        var enquiry = encodeURIComponent(document.getElementById('enquiry').value);

        var whatsappMessage = `Name: ${name}.%0APhone number:${whatsapp}.%0AAddress: ${address}.%0AEnquiry: ${enquiry}.`;

        // Construct WhatsApp message URL
        var whatsappURL = `https://wa.me/${8122005640}?text=${whatsappMessage}`;

        // Redirect to WhatsApp
        window.location.href = whatsappURL;
    }
}

function displayError(elementId, errorMessage) {
    document.getElementById(elementId).innerText = errorMessage;
}

function clearErrors() {
    var errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(function(element) {
        element.innerText = '';
    });
}

function isValidEmail(email) {
    // Basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}