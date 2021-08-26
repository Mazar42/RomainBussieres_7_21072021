const postForm = document.getElementById("submit-post");
const inpFile = document.getElementById("post-picture-upload");

const postTitle = document.getElementById('post-title').value;
const postText = document.getElementById('post-text').value;

const token = localStorage.getItem('token');

postForm.addEventListener("submit", e => {
    e.preventDefault();

    const mediaEndpoint = "http://localhost:3000/api/posts";
    const formData = new FormData();

    formData.append("image", inpFile.files[0]);
    formData.append("title", postTitle);
    formData.append("content", postText);

    fetch(mediaEndpoint, {
        method : "POST",
        body : formData,
        headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(data =>  window.location.href = './wall.html')
    .catch(error => console.error(error));
});