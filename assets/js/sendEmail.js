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
