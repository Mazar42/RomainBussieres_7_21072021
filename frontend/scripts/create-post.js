

const postForm = document.getElementById('submit-post');

postForm.addEventListener('submit', function (e){
    e.preventDefault();
    sendData();
});

// declare an object to hold data
let postContent = {};

const sendData = async () =>{
    const token = localStorage.getItem('token');
    //get data
    let postTitle = document.getElementById('post-title').value;
    let postText = document.getElementById('post-text').value;
    // let postPicture = document.getElementById('').value;

    // fill object

    postContent = {title : postTitle , image_url: null, content : postText };

    if((postTitle == null || postTitle == '') && (postText== null || postText == '')){
        alert('Veuillez renseigner un titre et un texte')
    }
    else{
    // send credentials
    fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        body: JSON.stringify(postContent),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        alert('Votre poste est en ligne !');
        window.location.href = './wall.html';
    })
    .catch(error => console.error(error));
    }

     
     
};