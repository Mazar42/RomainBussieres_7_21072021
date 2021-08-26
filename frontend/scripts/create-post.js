const postForm = document.getElementById('submit-post');


postForm.addEventListener('submit', function(e) {
    e.preventDefault();
    sendData();
});

// declare an object to hold data
const sendData = () => {
    const inpFile = document.getElementById('post-picture-upload');
    const formData = new FormData();
    const picture = inpFile.files[0]
    const token = localStorage.getItem('token');

    //get data
    const postTitle = document.getElementById('post-title').value;
    const postText = document.getElementById('post-text').value;

    // fill object
    formData.append('image', picture);
    formData.append('title', postTitle);
    formData.append('content', postText);

    console.log(formData.get('image'));

    // send post
    fetch('http://localhost:3000/api/posts', {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => response.json())
        .then(data => {
            window.location.href = './wall.html';
        })
        .catch(error => console.error(error));
};