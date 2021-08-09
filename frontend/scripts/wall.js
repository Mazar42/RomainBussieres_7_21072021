//API request

let posts;
let postSection = document.getElementById('posts-section');

const fetchPosts = async() => {
    posts = await fetch ('-- insert API url --').then(res => res.json())

    for(const post of posts) {
        console.log(post);
        postSection.innerHTML += `<div class="post-window">
        <figure class="post-card">
            <div class="post-image">
                 -- insert file display here -- 
            </div>
            <figcaption>
                <div class="post-text">
                    <h3> ${post.title} </h3> 
                    <p> ${post.text} </p>
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
                <div class="comment-container dropdown">
                    <div class="comment-card">
                        <p>User a commenté (20/07/2021): </p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse consequuntur voluptatibus
                            reiciendis ad optio asperiores provident tempore reprehenderit architecto nihil nisi,
                            accusamus maxime. Nostrum excepturi ad dolorum non, id saepe.</p>
                    </div>
                    <div class="comment-card">
                        <p>User a commenté (20/07/2021): </p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse consequuntur voluptatibus
                            reiciendis ad optio asperiores provident tempore reprehenderit architecto nihil nisi,
                            accusamus maxime. Nostrum excepturi ad dolorum non, id saepe.</p>
                    </div>
                </div>
            </div>
        </figure>
    </div>`
    }
}

// Manage display

let commentToggleButtons = document.getElementsByClassName('comment-dropdown-button');

for (button of commentToggleButtons){

    let chevronIcon = button.firstChild;
    let parent = button.parentElement;
    let commentsContainer = parent.nextElementSibling;
    
    // rotate chevron  
    const rotate = () => {

        if (chevronIcon.classList.contains('rotate')){
            chevronIcon.classList.remove('rotate');
        }
        else{
            chevronIcon.classList.add('rotate');
        }
    }

    // Show/Hide comment section
    const show = () => {
        if (commentsContainer.classList.contains('dropdown')){
            commentsContainer.classList.remove('dropdown');
        }
        else{
            commentsContainer.classList.add('dropdown');
        }  
    }

    //trigger both above functions when chevron is clicked
        button.addEventListener("click", () =>{
            rotate();
            show();
        });
}  
    
    