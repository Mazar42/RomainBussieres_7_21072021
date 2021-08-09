// declare an object to hold login credentials

let loginCredentials = {};

//extract data from input and fill created object with it

const sendData = async () =>{

    //extract provided intel

    let userId = document.getElementById('user-id').value;
    let userPassword = document.getElementById('password').value;

    // fill object

    loginCredentials = {email: userId, password: userPassword};

    // send credentials

    fetch('http://localhost3000/api/auth/login'), {
        method: 'post',
        body: JSON.stringify(loginCredentials),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    .then(response => response.json())
    .then(window.location.href = '../pages/wall.html') //for now, needs to be changed to match the profile
    .catch(error => console.error(error));
};