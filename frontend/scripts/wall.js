// --Comments--

// Display

//function to help convert time and date
function reverseString(str) {
    return str.split("-").reverse().join("-");
};

const displayComments = (id) => {

    let commentSection = document.getElementById(`comment-section-${id}`);
    console.log(commentSection);
    for (const comment of comments) {
        //convert time and date for comments
        let timeAndDate = comment.published_date;
        let splittedDate = timeAndDate.split("T");
        let date = reverseString(splittedDate[0]);
        let time = splittedDate[1].split(".")[0];

        //display comments
        console.log(comment.content);
        commentSection.innerHTML +=
            `<div class="comment-card">
                <p>${comment.firstname} ${comment.lastname} a commenté le ${date} à ${time}: </p>
                <p>${comment.content}</p>
                <button class="displayed-comment-action-btn">Supprimer</button>
            </div>`
    }

}

// //----Write new comment-----

// let newComment = {};

// const sendData =  () => {

//     //extract provided text

//     let commentContent = document.getElementById('comment-content').value;

//     // fill object

//     newComment = {post_id: currentPostId, content: commentContent};

//     // send comment

//     fetch('http://localhost:3000/api/auth/login', {
//         method: 'POST',
//         body: JSON.stringify(newComment),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => console.error(error));
// };

// const postComment = () => {
//     const submitComment = document.getElementById('submit-comment');

//     submitComment.addEventListener('submit', function (e){
//         e.preventDefault();
//          sendComment();
//     });
// }


//API request

let posts;
let postSection = document.getElementById('posts-section');

const fetchPosts = async() => {
    const token = localStorage.getItem('token')
    posts = await fetch('http://localhost:3000/api/posts/wall', { headers: { 'Authorization': `Bearer ${token}` } }).then(res => res.json())

    for (const post of posts) {

        //convert time and date for posts

        let timeAndDate = post.published_date;
        let splittedDate = timeAndDate.split("T");
        let date = reverseString(splittedDate[0]);
        let time = splittedDate[1].split(".")[0];

        //Display posts

        let currentPostId = post.id;
        console.log(currentPostId);
        comments = await fetch(`http://localhost:3000/api/posts/${currentPostId}/comments`, { headers: { 'Authorization': `Bearer ${token}` } }).then(res => res.json())
        if (post.image_url !== null) {
            postSection.innerHTML += `<div class="post-window">
        <figure class="post-card">
        <div class="post-info">Le ${date} à ${time}, ${post.firstname} ${post.lastname} a posté :</div>
            <div class="post-image">
            <img src="${post.image_url}">
            </div>
            <figcaption>
                <div class="post-text">
                    <h3> ${post.title} </h3> 
                    <p> ${post.content} </p>
                </div>
            </figcaption>
            <div class="comment-btn">
                <form <!--id="submit-comment">-->
                <input type="text" name="search" class="comment-field" placeholder="Commentez..."/>
                <button class="btnstyle-comment" type="submit">
                    <i class="fas fa-pencil-alt"></i>
                    <span class="btn-hover"></span>
                </button>
                </form>
            </div>
            <div class="comments" >
                <div class="comments-title">
                    <h4>Commentaires</h4>
                    <div class="comment-dropdown-button"><i class="fas fa-chevron-down icon-rotate"></i></div>
                </div>
                <div class=comment-container dropdown" id="comment-section-${post.id}">
                    
                </div>
            </div>
        </figure>
        </div>`
                // postComment();
            displayComments(post.id);
        } else {
            postSection.innerHTML += `<div class="post-window">
        <figure class="post-card">
        <div class="post-info">Le ${date} à ${time}, ${post.firstname} ${post.lastname} a posté :</div>
            <div class="post-image">
            </div>
            <figcaption>
                <div class="post-text">
                    <h3> ${post.title} </h3> 
                    <p> ${post.content} </p>
                </div>
            </figcaption>
            <div class="comment-btn">
                <input type="text" name="search" class="comment-field" placeholder="Commentez..."/>
                <button class="btnstyle-comment" type="button">
                    <i class="fas fa-pencil-alt"></i>
                    <span class="btn-hover"></span>
                </button>
            </div>
            <div class="comments">
                <div class="comments-title">
                    <h4>Commentaires</h4>
                    <div class="comment-dropdown-button"><i class="fas fa-chevron-down icon-rotate"></i></div>
                </div>
                <div class="comment-container dropdown" id="comment-section-${post.id}">
                
                </div>
            </div>
        </figure>
        </div>`
                // postComment();
            displayComments();
        }

        // Manage comments display

        let commentToggleButtons = document.getElementsByClassName('comment-dropdown-button');

        for (button of commentToggleButtons) {

            let chevronIcon = button.firstChild;
            let parent = button.parentElement;
            let commentsContainer = parent.nextElementSibling;

            // rotate chevron  
            const rotate = () => {

                if (chevronIcon.classList.contains('rotate')) {
                    chevronIcon.classList.remove('rotate');
                } else {
                    chevronIcon.classList.add('rotate');
                }
            }

            // Show/Hide comment section
            const show = () => {
                if (commentsContainer.classList.contains('dropdown')) {
                    commentsContainer.classList.remove('dropdown');
                } else {
                    commentsContainer.classList.add('dropdown');
                }
            }

            //trigger both above functions when chevron is clicked
            button.addEventListener("click", () => {
                rotate();
                show();
            });
        }


    };

}

fetchPosts();

// LogOut

const LogOut = () => {
    localStorage.removeItem('token');
    window.location.href = '../index.html';
}

let logOutButton = document.getElementById('log-out');

logOutButton.addEventListener("click", () => {
    LogOut();
});