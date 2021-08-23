// create form object
    
//declare an object to hold the form data
let formInfo ={}

//extract data from page and fill object
const sendData = async () =>{

    //extract data
    let name = document.getElementById('fname').value;
    let surname = document.getElementById('lname').value;
    let eMail = document.getElementById('email').value;
    let passWord = document.getElementById('password').value;
    //fill object
    formInfo = {firstName: name, lastName: surname, email: eMail, password : passWord};
    console.log(formInfo);
    //send data
    fetch('http://localhost:3000/api/auth/signup', {
        method: 'post',
        body: JSON.stringify(formInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let currentOrder = JSON.stringify(data.orderId)
        localStorage.setItem('Order', currentOrder)
        window.location.href = './confirmation-d-achat.html';
    })
    .catch(error => console.error(error));
    
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    sendData();
})

