function signup() {
    var inputName = document.getElementById("input-name");
    var inputEmail = document.getElementById("input-email");
    var checkboxTerms = document.getElementById("checkbox-terms");

    var name = inputName.value;
    var email = inputEmail.value;
    var accept_terms = checkboxTerms.checked;

    inputName.value = "";
    inputEmail.value = "";
    checkboxTerms.value = false;

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "https://api.supergood.space/signup", true);

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader("Accept", 'application/json');

    xhr.send(JSON.stringify({
        name: name,
        email: email,
        accept_terms: accept_terms,
    }));

    document.getElementById("signup-button-box").innerHTML = "<span id='signup-success'><b>Thanks for signing up! 🎉</b></span>";
}