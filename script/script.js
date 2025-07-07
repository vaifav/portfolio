const form = document.querySelector('form');
const userName = document.querySelector('#userName');
const yourEmail = document.querySelector('#yourEmail');
const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');


const isNameValid = () => {
    const regex = /^[A-Za-z0-9 ]+$/;
    const isValid = regex.test(userName.value);

    if (userName.value.length < 3) {
        return [false, "Should contain atleast 3 characters."];
    } else if (isValid !== true) {
        return [false, "No characters allowed."];
    }
    return [true, ''];
}


const isEmailValid = () => {
    const regex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = regex.test(yourEmail.value);

    if (isValid !== true) {
        return [false, 'Enter a valid email']
    }

    return [true, '']
}

userName.addEventListener('input', () => {
    const [isValid, msg] = isNameValid();
    if (isValid) {
        nameError.classList.replace('visible', 'invisible');
        userName.classList.replace('border-red-600', 'border-white');
    } else {
        nameError.innerHTML = msg;
        nameError.classList.replace('invisible', 'visible');
        userName.classList.replace('border-white', 'border-red-600');
    }
});

yourEmail.addEventListener('input', () => {
    const [isValid, msg] = isEmailValid();
    if (isValid) {
        emailError.classList.replace('visible', 'invisible');
        yourEmail.classList.replace('border-red-600', 'border-white');
    } else {
        emailError.innerHTML = msg;
        emailError.classList.replace('invisible', 'visible');
        yourEmail.classList.replace('border-white', 'border-red-600');
    }
});

form.addEventListener('submit', (e) => {
    const [name] = isNameValid();
    const [email] = isNameValid();

    if (name !== true || email !== true) {
        e.preventDefault();
        console.log(e);

    }
});