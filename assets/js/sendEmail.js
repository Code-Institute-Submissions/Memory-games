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

//const input = document.querySelector('input');
const nameClear = document.querySelector('#name');
const emailClear = document.querySelector('#email');
const textareaClear = document.querySelector('textarea');

const submitButton = document.querySelector('.submit-btn');

submitButton.addEventListener('click', clearForm);
function clearForm() {
    nameClear.value = '';
    emailClear.value = '';
    textareaClear.value = '';
    submitButton.textContent = 'SENT';
};

// BUGS: SUBMIT button needs to be changed so it will only change to SENT after information is inputted 
// BUGS: Information wont send properly with the clearForm function  


