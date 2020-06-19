// Sends Form
function sendMail(suggestionForm) {
    emailjs.send("gmail", "rosie", {
        "from_name": suggestionForm.name.value,
        "from_email": suggestionForm.email.value,
        "project_request": suggestionForm.suggestion.value
    })
    .then(
        function(response) {
            console.log('success', response);
        },
        function(error) {
            console.log('failed', error);
        }
    );
    return false;
};

// Clears Form
const nameClear = document.querySelector('#name');
const emailClear = document.querySelector('#email');
const textareaClear = document.querySelector('textarea');
const submitButton = document.querySelector('.submit-btn');

submitButton.addEventListener('click', resetForm);

function resetForm() {
    // Loading Animation
    this.classList.add('is-loading');
    // Reset Textarea
    setTimeout(() => {
        nameClear.value = '';
        emailClear.value = '';
        textareaClear.value = '';
        this.classList.remove('is-loading');
    }, 800);
};