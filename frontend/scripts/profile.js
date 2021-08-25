const fetchProfile = async() => {
    const token = localStorage.getItem('token');
    profile = await fetch('http://localhost:3000/api/auth/profile/', { headers: { 'Authorization': `Bearer ${token}` } }).then(res => res.json());
    let firstName = profile[0].firstname;
    let lastName = profile[0].lastname;

    //display profile

    let profileDisplay = document.getElementById('profile-display');

    profileDisplay.innerHTML = `<p>Vous êtes connecté en tant que : <br> ${firstName} ${lastName}</p>`;
};

fetchProfile();


// LogOut

const LogOut = () => {
    localStorage.removeItem('token');
    window.location.href = '../index.html';
}

let logOutButton = document.getElementById('log-out');

logOutButton.addEventListener("click", () => {
    LogOut();
});