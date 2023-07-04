let inputs = document.querySelectorAll('input');
let buttonSend = document.getElementById('signup-button');

let inputValidator = {
    "name": false,
    "email": false,
    "accept_terms": false,
}

var evalButtonSend = function (event) {
    let input = event.target;
    let name = input.getAttribute('name');
    let type = input.getAttribute('type');

    let isValid = false;

    switch (type) {
        case 'text':
            isValid = input.value.length > 0;
            break;
        case 'email':
            isValid = input.checkValidity();
            break;
        case 'checkbox':
            isValid = input.checked;
            break;
    }

    inputValidator[name] = isValid;

    let allTrue = Object.keys(inputValidator).every((item) => {
        return inputValidator[item] === true
    });

    buttonSend.disabled = !allTrue;
};

inputs.forEach((input) => {
    input.addEventListener('input', evalButtonSend, false);
})