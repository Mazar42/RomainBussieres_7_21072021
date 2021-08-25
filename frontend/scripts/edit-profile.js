const loginForm = document.getElementById('edit-form');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    sendData();
});

// declare an object to hold login credentials

let newInfo = {};

//extract data from input and fill created object with it

const sendData = () => {
    const token = localStorage.getItem('token');
    //extract provided intel

    let newFirstName = document.getElementById('fname').value;
    let newLastName = document.getElementById('lname').value;

    // fill object

    newInfos = { firstname: newFirstName, lastname: newLastName };
    console.log(newInfos);

    // send credentials

    fetch('http://localhost:3000/api/auth/update', {
            method: 'PUT',
            body: JSON.stringify(newInfos),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            alert('Profile Modifié');
            window.location.href = './wall.html';
        })
        .catch(error => console.error(error));


};