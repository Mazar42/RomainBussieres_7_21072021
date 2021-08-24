const signupForm = document.getElementById('signup-info');

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    sendData();
});

// declare an object to hold info

let signupInfo = {};

//extract data from input and fill created object with it

const sendData = () => {

    //extract provided intel

    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let userEmail = document.getElementById('email').value;
    let userPassword = document.getElementById('password').value;

    // fill object

    signupInfo = { firstname: firstName, lastname: lastName, email: userEmail, password: userPassword };

    // send credentials

    console.log(signupInfo);

    fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify(signupInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.error !== undefined) {
                alert(data.error);
                return;
            }
            return window.location.href = '../index.html';
        })
        .catch(error => console.error(error));

};