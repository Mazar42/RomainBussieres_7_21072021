console.log('hello');

let postContent = {};

const sendData = async () =>{

    //get data
    let postTitle = document.getElementById('post-title').value;
    let postText = document.getElementById('post-text').value;
    let postPicture = document.getElementById('').value;

    //fill object
    postContent = {user_id: '', title: postTitle , image_url: postPicture , content: postText};
    console.log(postContent);
    //send data
    fetch('http://localhost:3000/api/posts/', {
        method: 'post',
        body: JSON.stringify(formInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(() => {
        window.location.href = './wall'
      });
    };
