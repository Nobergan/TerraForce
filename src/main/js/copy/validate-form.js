$(".fourth__btn").on("click", validate);

// Validate email
function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}

// send form
function sendForm() {
    $(".fourth__btn").text("Form sending...").fadeIn();
    setTimeout(function () {
        $(".fourth__btn").text("Sent").fadeIn();
    }, 2000);
}

// validate email and send form after success validation
function validate() {
    var email = $(".fourth__input").val();
    var $error = $(".fourth__input-error");
    $error.text("");

    if (validateEmail(email)) {
        $error.fadeOut();
        sendForm();
    } else {
        $error.fadeIn();
        $error.text(email + " is not valid");
    }
    return false;
}