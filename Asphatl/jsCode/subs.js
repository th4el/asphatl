document.getElementById('signupForm').addEventListener('submit', function(event) {

    let isValid = true;
    let messages = [];

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const language = document.getElementById('language');
    const country = document.getElementById('country');
    const birthday = document.getElementById('birthday');
    const chck1 = document.getElementById('chck1');
    const chck3 = document.getElementById('chck3');

    if (!firstName.value) {
        isValid = false;
        messages.push('First Name is required');
    }
    if (!lastName.value) {
        isValid = false;
        messages.push('Last Name is required');
    }
    if (!email.value) {
        isValid = false;
        messages.push('Email is required');
    }
    if (!language.value) {
        isValid = false;
        messages.push('Language is required');
    }
    if (!country.value) {
        isValid = false;
        messages.push('Country/Region is required');
    }
    if (!chck1.checked) {
        isValid = false;
        messages.push('You must confirm you are 13 years old or older');
    }
    if (!chck3.checked) {
        isValid = false;
        messages.push('You must agree to receive information and promotional offers');
    }

    if (!isValid) {
        event.preventDefault();
        alert(messages.join('\n'));
    }
});