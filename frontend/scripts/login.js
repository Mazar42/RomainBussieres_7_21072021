const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    sendData();
});

// declare an object to hold login credentials

let loginCredentials = {};

//extract data from input and fill created object with it

const sendData = () => {

    //extract provided intel

    let userId = document.getElementById('user-id').value;
    let userPassword = document.getElementById('password').value;

    // fill object

    loginCredentials = { email: userId, password: userPassword };

    // send credentials

    fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(loginCredentials),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.token === undefined) {
                alert('Mauvais credentials');
                return
            }
            localStorage.setItem("token", data.token)
            localStorage.setItem("userId", data.userId)
            window.location.href = './pages/wall.html';
        })
        .catch(error => console.error(error));


};