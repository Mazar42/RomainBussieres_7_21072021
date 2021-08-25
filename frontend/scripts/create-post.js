const postForm = document.getElementById('submit-post');
const inpFile = document.getElementById('post-picture-upload');

postForm.addEventListener('submit', function (e){
    e.preventDefault();
    sendData();
});

// declare an object to hold data

const sendData = async () =>{


    let formData = new FormData();

    let picture = inpFile.files[0]
    // console.log(picture);
    const token = localStorage.getItem('token');
    //get data
    let postTitle = document.getElementById('post-title').value;
    let postText = document.getElementById('post-text').value;

    // fill object

    formData.append('image', picture);
    formData.append('title', postTitle);
    formData.append('content', postText);

    for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }

    if((postTitle == null || postTitle == '') && (postText== null || postText == '')){
        alert('Veuillez renseigner un titre et un texte')
    }
    else{
    // send credentials
    fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        body: formData,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
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
























// const sendData = async () =>{

//     let picture = inpFile.files[0]
//     console.log(picture);
//     const token = localStorage.getItem('token');
//     //get data
//     let postTitle = document.getElementById('post-title').value;
//     let postText = document.getElementById('post-text').value;

//     // fill object

//     postContent = {title : postTitle, content : postText};

//     if((postTitle == null || postTitle == '') && (postText== null || postText == '')){
//         alert('Veuillez renseigner un titre et un texte')
//     }
//     else{
//     // send credentials
//     fetch('http://localhost:3000/api/posts', {
//         method: 'POST',
//         body: JSON.stringify(postContent),
//         headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert('Votre poste est en ligne !');
//         window.location.href = './wall.html';
//     })
//     .catch(error => console.error(error));
//     }

     
     
// };