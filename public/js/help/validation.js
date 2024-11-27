document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const urgencyRadios = document.querySelectorAll('input[type="radio"]');
    const errorMessages = {};

    // Helper function to show error messages
    function showError(input, message) {
        input.classList.add('error');
        const errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        input.parentNode.appendChild(errorElement);
    }

    // Helper function to clear error messages
    function clearError(input) {
        input.classList.remove('error');
        const errorElement = input.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    function validateName() {
        clearError(nameInput);
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required.');
            return false;
        }
        return true;
    }

    function validateEmail() {
        clearError(emailInput);
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email is required.');
            return false;
        } else if (!emailPattern.test(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address.');
            return false;
        }
        return true;
    }

    // Validate phone number
    function validatePhone() {
        clearError(phoneInput);
        const phonePattern = /^\d{10}$/;
        if (phoneInput.value.trim() === '') {
            showError(phoneInput, 'Phone number is required.');
            return false;
        } else if (!phonePattern.test(phoneInput.value)) {
            showError(phoneInput, 'Phone number must be 10 digits.');
            return false;
        }
        return true;
    }

    // Validate message
    function validateMessage() {
        clearError(messageInput);
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Message is required.');
            return false;
        }
        return true;
    }

    // Validate urgency radio buttons
    function validateUrgency() {
        const selectedUrgency = Array.from(urgencyRadios).some(radio => radio.checked);
        const urgencyContainer = urgencyRadios[0].parentNode.parentNode;

        if (!selectedUrgency) {
            showError(urgencyContainer, 'Please select an urgency level.');
            return false;
        } else {
            clearError(urgencyContainer);
        }
        return true;
    }

    // Validate the entire form on submit
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isMessageValid = validateMessage();
        const isUrgencyValid = validateUrgency();

        if (isNameValid && isEmailValid && isPhoneValid && isMessageValid && isUrgencyValid) {
            alert('Form submitted successfully!');
            form.submit();
        }
    });

    // Real-time validation for inputs
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    phoneInput.addEventListener('input', validatePhone);
    messageInput.addEventListener('input', validateMessage);
});