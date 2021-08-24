const fetchProfile = async() => {
    const token = localStorage.getItem('token');
    profile = await fetch('http://localhost:3000/api/auth/profile/', { headers: { 'Authorization': `Bearer ${token}` } }).then(res => res.json())
};

// fetchProfile();


// LogOut

const LogOut = () => {
    localStorage.removeItem('token');
    window.location.href = '../index.html';
}

let logOutButton = document.getElementById('log-out');

logOutButton.addEventListener("click", () => {
    LogOut();
});