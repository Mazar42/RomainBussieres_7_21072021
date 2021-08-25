//display profile
const fetchProfile = async () => {
    const token = localStorage.getItem('token');
    profile = await fetch('http://localhost:3000/api/auth/profile/', { headers: { 'Authorization': `Bearer ${token}` } }).then(res => res.json());

    let firstName = profile[0].firstname;
    let lastName = profile[0].lastname;

    let profileDisplay = document.getElementById('profile-display');


    profileDisplay.innerHTML = `<p>Vous êtes connecté en tant que : <br> ${firstName} ${lastName}</p>`;

};

fetchProfile();

//delete profile

let deleteProfileButton = document.getElementById('delete-profile');

const destroyProfile = () => {
    const token = localStorage.getItem('token');

    fetch(`http://localhost:3000/api/auth/destroy`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            alert("Votre profile a été supprimé, vous allez être redirigé vers la page d'accueil"),
            localStorage.removeItem('token'),
            localStorage.removeItem('userId'),
            localStorage.removeItem('user'),
            window.location.href = '../index.html';    
        })
        .catch(error => console.error(error));
}

deleteProfileButton.addEventListener('click', function () { destroyProfile() });




// LogOut

const LogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('user');
    window.location.href = '../index.html';
}

let logOutButton = document.getElementById('log-out');

logOutButton.addEventListener("click", () => {
    LogOut();
});